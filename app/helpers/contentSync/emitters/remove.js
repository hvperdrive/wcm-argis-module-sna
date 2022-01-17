const { remove: removeAdapter } = require("../../adapters");
const { map } = require("ramda");

const mapToIds = map((feature) => feature.id);

module.exports = (featuresByType) => Promise.all([
	removeAdapter("point", mapToIds(featuresByType.points)),
	removeAdapter("poly", mapToIds(featuresByType.polygons)),
	removeAdapter("polyline", mapToIds(featuresByType.polylines))
]).then(([points, polygons, polylines]) => ({ points, polygons, polylines }));
