const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../../test/mocks/ArcgisResponses");
const wegenwerkenContentMock = require("../../../../test/mocks/wegenwerkenContent")

describe("Handlers - upsert", () => {
	let upsert;

	let pointQueryNock;
	let polyQueryNock;
	let lineQueryNock;

	let pointCreateNock;
	let polyCreateNock;
	let lineCreateNock;

	let pointUpdateNock;
	let polyUpdateNock;
	let lineUpdateNock;

	let pointRemoveNock;
	let polyRemoveNock;
	let lineRemoveNock;

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

		lineQueryNock = nock("https://geoint-a.antwerpen.be")
			.get("/arcgis/rest/services/A_SNA/SNA_werven_line_wgs84/FeatureServer/0/query")
			.query(true)
			.reply(200, arcgisResponseMocks.queryLines);

		pointCreateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/addFeatures")
			.reply(200, arcgisResponseMocks.queryPoints);

		polyCreateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/addFeatures")
			.reply(200, arcgisResponseMocks.queryPolygons);

		lineCreateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_line_wgs84/FeatureServer/0/addFeatures")
			.reply(200, arcgisResponseMocks.queryLines);

		pointUpdateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryPoints);

		polyUpdateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryPolygons);

		lineUpdateNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_line_wgs84/FeatureServer/0/updateFeatures")
			.reply(200, arcgisResponseMocks.queryLines);

		pointRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		polyRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		lineRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_line_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		upsert = require("./upsert");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		pointQueryNock.isDone();
		polyQueryNock.isDone();
		lineQueryNock.isDone();

		polyCreateNock.isDone();
		pointCreateNock.isDone();
		lineCreateNock.isDone();

		pointUpdateNock.isDone();
		polyUpdateNock.isDone();
		lineUpdateNock.isDone();

		pointRemoveNock.isDone();
		polyRemoveNock.isDone();
		lineRemoveNock.isDone();
	});

	it("Should sync arcgis features based on content & arcgis existing features", async() => {
		const result = await upsert(wegenwerkenContentMock.content1);

		expect(result)
			.to.be.an("array")
			.and.to.have.lengthOf(3);
	});
});

