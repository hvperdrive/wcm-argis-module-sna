const setupRoutes = require("./routes");
const variablesHelper = require("./helpers/variables");
const hooksController = require("./controllers/hooks");
const listener = require("./controllers/listener");

module.exports = (app, hooks, moduleInfo) => {
	// Get variables
	variablesHelper.reload(moduleInfo)
		.then((variables) => {
			listener.start();
		});

	// Handle hooks
	hooksController.handleHooks(hooks);

	// Setup routes
	setupRoutes(app, moduleInfo);
};

// Exposed API (for other modules)
module.exports.API = require("./api");
