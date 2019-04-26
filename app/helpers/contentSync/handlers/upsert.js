const { prop } = require("ramda");
const validators = require("../validators");

const mappers = require("../mappers");
const fetchers = require("../fetchers");
const emitters = require("../emitters");

module.exports = (content) => {
	if (!validators.content(content)) {
		console.log(`SNA-ARCGIS-MODULE: Invalid content, skipping arcgis sync for ${prop("_id", content)}`);
		return;
	}

	// Get existing polygons & points of the content item if there are any
	return fetchers.getArcgisFeaturesByContent(content)
		// Sort existing p&p's en content shapes into appropriate actions
		.then((arcgisFeatures) => mappers.sortShapesInOperations(content, arcgisFeatures))
		// Exec sync actions
		.then((operations) => Promise.all([
			emitters.remove(operations.remove),
			emitters.update(operations.update),
			emitters.create(operations.create),
		]))
			.then((result) => console.log("SNA-ARCGIS-MODULE: Sync successfull") || result)
			.catch((error) => console.log(`SNA-ARCGIS-MODULE: Sync error for ${prop("_id", content)}`, error))
};
