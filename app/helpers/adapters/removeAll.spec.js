const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../test/mocks/variablesHelper");

describe("Adapters - removeAll", () => {
	let removeAll;
	let pointRemoveNock;
	let polyRemoveNock;
	let lineRemoveNock;

	before(() => {
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());

		pointRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/deleteFeatures")
			.query({
				where: "1=1",
				f: "json"
			})
			.reply(200, {});

		polyRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/deleteFeatures")
			.query({
				where: "1=1",
				f: "json"
			})
			.reply(200, {});

		lineRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_line_wgs84/FeatureServer/0/deleteFeatures")
			.query({
				where: "1=1",
				f: "json"
			})
			.reply(200, {});


		removeAll = require("./removeAll");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		polyRemoveNock.isDone();
		pointRemoveNock.isDone();
		lineRemoveNock.isDone();
	});

	it("Should remove all point features from Arcgis", async() => {
		const result = await removeAll("point");

		expect(result).to.be.an("object").and.to.be.empty
	});

	it("Should remove all polygon features from Arcgis", async() => {
		const result = await removeAll("poly");

		expect(result).to.be.an("object").and.to.be.empty
	});

	it("Should remove all polyline features from Arcgis", async() => {
		const result = await removeAll("polyline");

		expect(result).to.be.an("object").and.to.be.empty
	});
});

