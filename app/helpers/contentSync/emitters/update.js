const { update: updateAdapter } = require("../../adapters");

module.exports = (featuresByType) => Promise.all([
	updateAdapter("point", featuresByType.points),
	updateAdapter("poly", featuresByType.polygons),
	updateAdapter("polyline", featuresByType.polylines),
]).then(([points, polygons, polylines]) => ({ points, polygons, polylines }));
