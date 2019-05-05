const mockery = require("mockery");
const { expect } = require("chai");

const ContentModelMock = require("../../../../test/mocks/contentModel");
const variablesHelperMock = require("../../../../test/mocks/variablesHelper");

describe("Fetchers - getContentBatch", () => {
	let getContentBatch;
	let contentModelMock

	before(() => {
		contentModelMock = new ContentModelMock([{}, {}, {}]);
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../../variables", variablesHelperMock());
		mockery.registerMock("@wcm/module-helper", {
			models: {
				Content: contentModelMock
			}
		});

		getContentBatch = require("./getContentBatch");
	});

	it("Should get content in batch", async() => {
		const result = await getContentBatch(0, 3);

		expect(result).to.deep.equal([{}, {}, {}]);

		const spies = contentModelMock.spies;

		expect(spies.find.calledOnce).to.be.true;
		expect(spies.find.firstCall.args).to.deep.equal([{
			"meta.contentType": variablesHelperMock().get().contentTypes.variables.wegenWerkenContentTypeId,
			"meta.deleted": false,
			"meta.published": true}]
		);

		expect(spies.skip.calledOnce).to.be.true;
		expect(spies.skip.firstCall.args).to.deep.equal([0]);

		expect(spies.limit.calledOnce).to.be.true;
		expect(spies.limit.firstCall.args).to.deep.equal([3]);

		expect(spies.lean.calledOnce).to.be.true;
		expect(spies.exec.calledOnce).to.be.true;
	});
});
