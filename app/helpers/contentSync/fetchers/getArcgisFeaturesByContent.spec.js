const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../../test/mocks/ArcgisResponses");

describe("Fetchers - getArcgisFeaturesByContent", () => {
	let getArcgisFeaturesByContent;
	let polyNock;
	let pointNock;

	before(() => {
		mockery.enable({ warnOnUnregistered: false });
		mockery.registerMock("../variables", variablesHelperMock());

		polyNock = nock("https://geoint-a.antwerpen.be")
			.get("/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/query")
			.query(true)
			.reply(200, arcgisResponseMocks.queryPolygons);
		pointNock = nock("https://geoint-a.antwerpen.be")
			.get("/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/query")
			.query(true)
			.reply(200, arcgisResponseMocks.queryPoints);

		getArcgisFeaturesByContent = require("./getArcgisFeaturesByContent");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		polyNock.isDone();
		pointNock.isDone();
	});

	it("Should fetch Arcgis Data", () => {
		return getArcgisFeaturesByContent({ uuid: "88c4d566-7feb-42ca-a28c-9b15bc38186a" })
			.then((result) => {
				expect(result).to.be.an("object");
				expect(result.points)
					.to.be.an("array")
					.to.have.lengthOf(2);
				expect(result.points[0]).to.be.an("object");
				expect(result.points[0].properties).to.be.an("object");
				expect(result.points[0].properties.F_id).to.equal(1555061711181);
				expect(result.points[0].properties.uuid).to.equal("7faa0d00-bb0a-4add-bfd4-195c26ff50b2");
			});
	});
});

