const { update: updateAdapter } = require("../../adapters");

module.exports = (featuresByType) => Promise.all([
	updateAdapter("point", featuresByType.points),
	updateAdapter("poly", featuresByType.polygons),
]).then(([points, polygons]) => ({ points, polygons }));
