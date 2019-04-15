const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../test/mocks/ArcgisResponses");

describe("Adapters - create", () => {
	let create;
	let pointCreateNock;
	let polyCreateNock;

	before(() => {
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());

		create = require("./create");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		polyCreateNock.isDone();
		pointCreateNock.isDone();
	});

	it("Should create point features from Arcgis", async() => {
		pointCreateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/addFeatures")
			.reply(200, arcgisResponseMocks.queryPoints);

		const result = await create("point", [{}, {}, {}]);

		expect(result).to.deep.equal(arcgisResponseMocks.queryPoints);
	});

	it("Should create polygon features from Arcgis", async() => {
		polyCreateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/addFeatures")
			.reply(200, arcgisResponseMocks.queryPolygons);

		const result = await create("poly", [{}, {}, {}]);

		expect(result).to.deep.equal(arcgisResponseMocks.queryPolygons);
	});
});

