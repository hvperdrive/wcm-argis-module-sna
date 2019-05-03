const { expect } = require("chai");
const mockery = require("mockery");
const nock = require("nock");

const variablesHelperMock = require("../../../test/mocks/variablesHelper");
const arcgisResponseMocks = require("../../../test/mocks/ArcgisResponses");

describe("Adapters - get", () => {
	let get;
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

		get = require("./get");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();

		polyNock.isDone();
		pointNock.isDone();
	});

	it("Should fetch polygon features from Arcgis", () => {
		return get({ qs: {
			where: `uuid = '88c4d566-7feb-42ca-a28c-9b15bc38186a'`,
			geometryType: "esriGeometryEnvelope",
			spatialRel: "esriSpatialRelIntersects",
			units: "esriSRUnit_Foot",
			returnGeometry: true,
			f: "geojson",
			outFields: "*"
		}, type: "poly" }).then((result) => {
			expect(result).to.be.an("object");
			expect(result.features)
				.to.be.an("array")
				.to.have.lengthOf(2);
			expect(result.features[0]).to.be.an("object");
			expect(result.features[0].properties).to.be.an("object");
			expect(result.features[0].properties.F_id).to.equal(1543918360545);
			expect(result.features[0].properties.uuid).to.equal("7faa0d00-bb0a-4add-bfd4-195c26ff50b2");
		});
	});

	it("Should fetch point features from Arcgis", () => {
		return get({ qs: {
			where: `uuid = '88c4d566-7feb-42ca-a28c-9b15bc38186a'`,
			geometryType: "esriGeometryEnvelope",
			spatialRel: "esriSpatialRelIntersects",
			units: "esriSRUnit_Foot",
			returnGeometry: true,
			f: "geojson",
			outFields: "*"
		}, type: "point" }).then((result) => {
			expect(result).to.be.an("object");
			expect(result.features)
				.to.be.an("array")
				.to.have.lengthOf(2);
			expect(result.features[0]).to.be.an("object");
			expect(result.features[0].properties).to.be.an("object");
			expect(result.features[0].properties.F_id).to.equal(1555061711181);
			expect(result.features[0].properties.uuid).to.equal("7faa0d00-bb0a-4add-bfd4-195c26ff50b2");
		});
	});
});

