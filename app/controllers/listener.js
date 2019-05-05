const Emitter = require("@wcm/module-helper").emitter;
const { handlers } = require("../helpers/contentSync");

const removeOldListeners = module.exports.stop = () => {
	Emitter.off("content.created", handlers.upsert);
	Emitter.off("content.updated", handlers.upsert);
	Emitter.off("content.removed", handlers.remove);
	Emitter.off("content.unpublished", handlers.remove);
}

module.exports.start = () => {
	removeOldListeners();

	Emitter.on("content.created", handlers.upsert);
	Emitter.on("content.updated", handlers.upsert);
	Emitter.on("content.removed", handlers.remove);
	Emitter.on("content.unpublished", handlers.remove);
}
