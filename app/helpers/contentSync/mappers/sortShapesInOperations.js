const {
	compose,
	toLower,
	curry,
	map,
	filter,
	path,
	pathOr,
	equals,
	differenceWith,
	innerJoin,
} = require("ramda");

const getShapes = require("./getShapes");
const shapeToFeature = require("./shapeToFeature");

/**
 * @typedef {Object} arcgisSortedResponse
 * @property {Object} getArcgisFeaturesByContentResponse.polygons Polygon features
 * @property {Object[]} getArcgisFeaturesByContentResponse.polygons.create Polygon features
 * @property {Object[]} getArcgisFeaturesByContentResponse.polygons.update Polygon features
 * @property {Object[]} getArcgisFeaturesByContentResponse.polygons.remove Polygon features
 * @property {Object} getArcgisFeaturesByContentResponse.points Point features
 * @property {Object[]} getArcgisFeaturesByContentResponse.points.create Point features
 * @property {Object[]} getArcgisFeaturesByContentResponse.points.update Point features
 * @property {Object[]} getArcgisFeaturesByContentResponse.points.remove Point features
 */

const getContentFId = (feature) => compose(
	(item) => item.toString(),
	pathOr(-1, ["attributes", "F_id"])
)(feature);
const getArcgisFId = (feature) => path(["properties", "F_id"])(feature);

const sortByCrud = (type, content, features) => {
	// Map and filter the content shapes to features of a specific type
	const contentFeatures = compose(
		// Map content shape to Arcgis feature
		map(curry(shapeToFeature)(content)),
		// filter content shapes by type (point, polygon)
		filter((shape) => compose(
			equals(type.slice(0, -1)), // remove 's' (points => point, polygons => polygon)
			toLower,
			pathOr("", ["geometry", "type"])
		)(shape)),
		getShapes
	)(content);

	const comp = (contentFeature, feature) => getContentFId(contentFeature) === getArcgisFId(feature);

	return {
		create: differenceWith((contentFeature, feature) => comp(contentFeature, feature))(contentFeatures, features),
		update: innerJoin((feature, contentFeature) => comp(contentFeature, feature))(features, contentFeatures),
		remove: differenceWith((feature, contentFeature) => comp(contentFeature, feature))(features, contentFeatures),
	};
};

/**
 * @function sortShapesInOperations
 * @param {ArcgisMappedResponse} arcgisFeatures
 * @returns {arcgisSortedResponse} Response
 */
module.exports = (content, arcgisFeatures) => {
	return Object.keys(arcgisFeatures).reduce((acc, key) => {
		const sorted = sortByCrud(key, content, arcgisFeatures[key]);

		acc.create[key] = sorted.create;
		acc.update[key] = sorted.update;
		acc.remove[key] = sorted.remove;

		return acc;
	}, {
		create: {},
		update: {},
		remove: {},
	});
};
