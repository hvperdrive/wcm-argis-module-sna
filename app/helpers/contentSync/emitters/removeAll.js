const { removeAll: removeAllAdapter } = require("../../adapters");

module.exports = () => Promise.all([
	removeAllAdapter("point"),
	removeAllAdapter("poly"),
	removeAllAdapter("polyline")
]).then(([points, polygons, polylines]) => ({ points, polygons, polylines }));
