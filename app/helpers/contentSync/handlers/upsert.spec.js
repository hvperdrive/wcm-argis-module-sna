const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../../test/mocks/ArcgisResponses");
const wegenwerkenContentMock = require("../../../../test/mocks/wegenwerkenContent")

describe("Handlers - create", () => {
	let upsert;

	let pointQueryNock;
	let polyQueryNock;

	let pointCreateNock;
	let polyCreateNock;

	let pointUpdateNock;
	let polyUpdateeNock;

	let pointRemoveNock;
	let polyRemoveNock;

	before(() => {
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());
		mockery.registerMock("../../variables", variablesHelperMock({
			wegenWerkenId: wegenwerkenContentMock.content1.meta.contentType._id
		}));

		pointQueryNock = nock("https://geoint-a.antwerpen.be")
			.get("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/query")
			.query(true)
			.reply(200, arcgisResponseMocks.queryPoints);

		polyQueryNock = nock("https://geoint-a.antwerpen.be")
			.get("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/query")
			.query(true)
			.reply(200, arcgisResponseMocks.queryPolygons);

		pointCreateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/addFeatures")
			.reply(200, arcgisResponseMocks.queryPoints);

		polyCreateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/addFeatures")
			.reply(200, arcgisResponseMocks.queryPolygons);

		pointUpdateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryPoints);

		polyUpdateeNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryPolygons);

		pointRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		polyRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		upsert = require("./upsert");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		pointQueryNock.isDone();
		polyQueryNock.isDone();

		polyCreateNock.isDone();
		pointCreateNock.isDone();

		pointUpdateNock.isDone();
		polyUpdateeNock.isDone();

		pointRemoveNock.isDone();
		polyRemoveNock.isDone();
	});

	it("Should sync arcgis features based on content & arcgis existing features", async() => {
		const result = await upsert(wegenwerkenContentMock.content1);

		expect(result)
			.to.be.an("array")
			.and.to.have.lengthOf(3);

	});
});

