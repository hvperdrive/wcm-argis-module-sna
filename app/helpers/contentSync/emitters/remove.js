const { remove: removeAdapter } = require("../../adapters");
const { map } = require("ramda");

const mapToIds = map((feature) => feature.id);

module.exports = (featuresByType) => Promise.all([
	removeAdapter("point", mapToIds(featuresByType.points)),
	removeAdapter("poly", mapToIds(featuresByType.polygons))
]).then(([points, polygons]) => ({ points, polygons }));
