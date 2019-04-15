const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../test/mocks/ArcgisResponses");

describe("Adapters - remove", () => {
	let remove;
	let pointRemoveNock;
	let polyRemoveNock;

	before(() => {
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());

		remove = require("./remove");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		polyRemoveNock.isDone();
		pointRemoveNock.isDone();
	});

	it("Should remove point features from Arcgis", async() => {
		pointRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		const result = await remove("point", ["id1", "id2", "id3"]);

		expect(result).to.be.an("object").and.to.be.empty
	});

	it("Should remove polygon features from Arcgis", async() => {
		polyRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		const result = await remove("poly", ["id3", "id4", "id5"]);

		expect(result).to.be.an("object").and.to.be.empty
	});
});

