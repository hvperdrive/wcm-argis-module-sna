const adapters = require("../../adapters");

/**
 * @typedef {Object} ArcgisMappedResponse
 * @property {Object[]} getArcgisFeaturesByContentResponse.polygons Polygon features
 * @property {Object[]} getArcgisFeaturesByContentResponse.points Point features
 */

/**
 * @function getArcgisFeaturesByContent
 * @param {Object} contentItem - Content item with uuid
 * @returns {Promise<ArcgisMappedResponse>} Response
 */
module.exports = (contentItem) => {
	const queryParams = {
		where: `uuid='${contentItem.uuid}'`,
		geometryType: "esriGeometryEnvelope",
		spatialRel: "esriSpatialRelIntersects",
		units: "esriSRUnit_Foot",
		returnGeometry: true,
		f: "geojson",
		outFields: "*"
    };

	return Promise.all([
		adapters.get({ qs: queryParams, type: "poly" }),
		adapters.get({ qs: queryParams, type: "point" })
	])
	.then(([polygons, points]) => ({
		polygons: polygons.features,
		points: points.features,
	}));
}

