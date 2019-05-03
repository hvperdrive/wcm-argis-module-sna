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
    reduce,
    ifElse,
    identity,
    always,
    set,
    lensPath,
    find,
    concat,
    tap,
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

const innerJoinMap = curry((pred, map, listA, listB) => reduce((acc, listAItem) =>
    compose(
        concat(acc),
        ifElse(
            identity,
            (listBItem) => [map(listAItem, listBItem)],
            always([])
        ),
        find((listBItem) => pred(listAItem, listBItem) && { listAItem, listBItem })
    )(listB)
    ,[]
)(listA));

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
    const updateMapper = (contentFeature, feature) => compose(
        set(
            lensPath(["attributes", "OBJECTID"]),
            path(["properties", "OBJECTID"])(feature)
        ),
        set(
            lensPath(["id"]),
            path(["id"])(feature)
        )
    )(contentFeature);

	return {
		create: differenceWith(comp)(contentFeatures, features),
		update: innerJoinMap(comp, updateMapper)(contentFeatures, features),
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
