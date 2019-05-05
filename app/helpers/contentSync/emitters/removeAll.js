const { removeAll: removeAllAdapter } = require("../../adapters");

module.exports = () => Promise.all([
	removeAllAdapter("point"),
	removeAllAdapter("poly")
]).then(([points, polygons]) => ({ points, polygons }));
