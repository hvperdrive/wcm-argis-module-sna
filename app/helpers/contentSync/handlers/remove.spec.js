const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../../test/mocks/ArcgisResponses");
const wegenwerkenContentMock = require("../../../../test/mocks/wegenwerkenContent")

describe("Handlers - remove", () => {
	let remove;

	let pointQueryNock;
	let polyQueryNock;

	let pointRemoveNock;
	let polyRemoveNock;

	before(() => {
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());
		mockery.registerMock("../../variables", variablesHelperMock({
			wegenWerkenId: wegenwerkenContentMock.content1.meta.contentType._id
		}));
		mockery.registerMock("@wcm/module-helper", { models: { Content: {}}})

		pointQueryNock = nock("https://geoint-a.antwerpen.be")
			.get("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/query")
			.query(true)
			.reply(200, arcgisResponseMocks.queryPoints);

		polyQueryNock = nock("https://geoint-a.antwerpen.be")
			.get("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/query")
			.query(true)
			.reply(200, arcgisResponseMocks.queryPolygons);

		pointRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		polyRemoveNock = nock("https://geoint-a.antwerpen.be")
			.post("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/deleteFeatures")
			.query(true)
			.reply(200, {});

		remove = require("./remove");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		pointQueryNock.isDone();
		polyQueryNock.isDone();

		pointRemoveNock.isDone();
		polyRemoveNock.isDone();
	});

	it("Should sync arcgis features based on content & arcgis existing features", async() => {
		const result = await remove(wegenwerkenContentMock.content1);

		expect(result).to.be.an("object");

		expect(result.points)
			.to.be.an("object")
			.and.to.be.empty;

		expect(result.polygons)
			.to.be.an("object")
			.and.to.be.empty;

	});
});

