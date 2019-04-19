const Q = require("q");

const emitters = require("../emitters");
const fetchers = require("../fetchers");
const upsert = require("./upsert");

const BATCH_SIZE = 10;

const run = (total, skip, limit) => fetchers.getContentBatch(skip, limit)
	.then((content) => Q.allSettled(content.map((item) => upsert(item))))
	.then((results) => {
		if(skip >= total) {
			return results;
		}

		return run(total, skip + BATCH_SIZE, limit)
			.then((newResults) => results.concat(newResults));
	});


module.exports = () => {
	console.log("SNA-ARCGIS-MODULE: Resync started...");

	// STEP 1: Remove all arcgis features (point & layer)
	return emitters.removeAll()
	// STEP 2: Resync content in batches of x (10?)
		.then(() => fetchers.getContentCountOfCT())
		.then((count) => run(count, 0, BATCH_SIZE))
		.then((results) => {
			const failures = results.filter((result) => result.state !== "fulfilled");

			if (failures.length) {
				console.log("SNA-ARCGIS-MODULE: Resync (partially) failed", failures);
				throw Error("SNA-ARCGIS-MODULE: Resync (partially) failed");
			}

			console.log("SNA-ARCGIS-MODULE: Resync complete");
			return;
		});
}
