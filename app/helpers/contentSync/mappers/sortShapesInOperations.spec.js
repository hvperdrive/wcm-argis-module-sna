const { expect } = require("chai");

const sortShapesInOperations = require("./sortShapesInOperations");

const arcgisResponsesMock = require("../../../../test/mocks/ArcgisResponses");
const wegenwerkenContentMock = require("../../../../test/mocks/wegenwerkenContent");

describe("Mappers - sortShapesInOperations", () => {
	it("Should identify which features to add, update and remove", () => {
		const result = sortShapesInOperations(wegenwerkenContentMock.content1, {
			polygons: arcgisResponsesMock.queryPolygons.features,
			polylines: arcgisResponsesMock.queryLines.features,
			points: arcgisResponsesMock.queryPoints.features
		});

		expect(result).to.be.an("object");
		expect(result.create).to.be.an("object");
		expect(result.create).to.have.property("polygons");
		expect(result.create).to.have.property("polylines");
		expect(result.create).to.have.property("points");
		expect(result.create).to.be.an("object");
		expect(result.create).to.have.property("polygons");
		expect(result.create).to.have.property("polylines");
		expect(result.create).to.have.property("points");
		expect(result.create).to.be.an("object");
		expect(result.create).to.have.property("polygons");
		expect(result.create).to.have.property("polylines");
		expect(result.create).to.have.property("points");

		expect(result.create.polygons)
			.to.be.an("array")
			.to.have.lengthOf(4)
		expect(result.create.polylines)
			.to.be.an("array")
			.to.have.lengthOf(1)
		expect(result.create.points)
			.to.be.an("array")
			.to.have.lengthOf(1)

		expect(result.update.polygons)
			.to.be.an("array")
			.to.have.lengthOf(1)
		expect(result.update.polylines)
			.to.be.an("array")
			.to.have.lengthOf(0)
		expect(result.update.points)
			.to.be.an("array")
			.to.have.lengthOf(1)

		expect(result.remove.polygons)
			.to.be.an("array")
			.to.have.lengthOf(1)
		expect(result.remove.polylines)
			.to.be.an("array")
			.to.have.lengthOf(1)
		expect(result.remove.points)
			.to.be.an("array")
			.to.have.lengthOf(1)
	});
});
