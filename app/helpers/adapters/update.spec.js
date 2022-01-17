const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../test/mocks/ArcgisResponses");

describe("Adapters - update", () => {
	let update;
	let pointUpdateNock;
	let polyUpdateNock;
	let lineUpdateNock;

	before(() => {
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());

		update = require("./update");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		polyUpdateNock.isDone();
		pointUpdateNock.isDone();
		lineUpdateNock.isDone();
	});

	it("Should update point features from Arcgis", async() => {
		pointUpdateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryPoints);

		const result = await update("point", [{}, {}, {}]);

		expect(result).to.deep.equal(arcgisResponseMocks.queryPoints);
	});

	it("Should update polygon features from Arcgis", async() => {
		polyUpdateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryPolygons);

		const result = await update("poly", [{}, {}, {}]);

		expect(result).to.deep.equal(arcgisResponseMocks.queryPolygons);
	});

	it("Should update polyline features from Arcgis", async() => {
		lineUpdateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_line_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryLines);

		const result = await update("polyline", [{}, {}, {}]);

		expect(result).to.deep.equal(arcgisResponseMocks.queryLines);
	});
});

