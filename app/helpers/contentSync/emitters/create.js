const { create: createAdapter } = require("../../adapters");

module.exports = (featuresByType) => Promise.all([
	createAdapter("point", featuresByType.points),
	createAdapter("poly", featuresByType.polygons),
]).then(([points, polygons]) => ({ points, polygons }));
