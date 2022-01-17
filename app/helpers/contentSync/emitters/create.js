const { create: createAdapter } = require("../../adapters");

module.exports = (featuresByType) => Promise.all([
	createAdapter("point", featuresByType.points),
	createAdapter("poly", featuresByType.polygons),
	createAdapter("polyline", featuresByType.polylines),
]).then(([points, polygons, polylines]) => ({ points, polygons, polylines }));
