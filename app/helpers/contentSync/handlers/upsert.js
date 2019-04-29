const Q = require("q");
const { prop } = require("ramda");
const validators = require("../validators");

const mappers = require("../mappers");
const fetchers = require("../fetchers");
const emitters = require("../emitters");

module.exports = (content) => {
	if (!validators.content(content)) {
		console.log(`SNA-ARCGIS-MODULE: Invalid content, skipping arcgis sync for ${prop("uuid", content)}`);
		return;
    }

	// Get existing polygons & points of the content item if there are any
	return fetchers.getArcgisFeaturesByContent(content)
		// Sort existing p&p's en content shapes into appropriate actions
		.then((arcgisFeatures) => mappers.sortShapesInOperations(content, arcgisFeatures))
		// Exec sync actions
		.then((operations) => Q.allSettled([
			emitters.remove(operations.remove),
			emitters.update(operations.update),
			emitters.create(operations.create),
        ]))
            .then((responses) => {
                const errors = responses.filter((promiseResult) => promiseResult.state !== "fulfilled");

                if (errors.length) {
                    throw errors;
                }

                return responses;
            })
			.then((result) => console.log("SNA-ARCGIS-MODULE: Sync successfull") || result)
			.catch((error) => {
                let parsedError;

                try {
                    parsedError = JSON.stringify(error);
                } catch (e) {
                    parsedError = error;
                }

                console.log(`SNA-ARCGIS-MODULE: Sync error for ${prop("uuid", content)}`, parsedError);
            })
};
