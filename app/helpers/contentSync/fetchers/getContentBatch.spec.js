const mockery = require("mockery");

const ContentModelMock = require("../../../../test/mocks/contentModel");
const variablesHelperMock = require("../../../../test/mocks/variablesHelper");

describe("Fetchers - getContentBatch", () => {
	let getContentBatch;
	let contentModelMock

	before(() => {
		contentModelMock = new ContentModelMock([{}, {}, {}]);
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());
		mockery.registerMock("@wcm/module-helper", {
			models: {
				Content: contentModelMock
			}
		});

		getContentBatch = require("./getContentBatch");
	});

	it("Should get content in batch", async() => {
		const result = await getContentBatch(0, 3);

		console.log(result);

		console.log(contentModelMock.spies);
	});
});
