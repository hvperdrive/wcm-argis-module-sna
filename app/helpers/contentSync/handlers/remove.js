const { prop } = require("ramda");
const validators = require("../validators");

const mappers = require("../mappers");
const fetchers = require("../fetchers");
const emitters = require("../emitters");

module.exports = (content) => {
	if (!validators.content(content)) {
		console.log(`SNA-ARCGIS-MODULE: Invalid content, skipping arcgis removeal for ${prop("_id", content)}`);
		return;
	}

	// Get existing polygons & points of the content item if there are any
	return fetchers.getArcgisFeaturesByContent(content)
		// Remove features
		.then((operations) => emitters.remove(operations))
		.then((result) => console.log(`SNA-ARCGIS-MODULE: features removed because of content removal (${prop("_id", content)})`) || result);
};
