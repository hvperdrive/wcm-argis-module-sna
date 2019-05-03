const { expect } = require("chai");

const wegenwerkenContentMock = require("../../../../test/mocks/wegenwerkenContent");

const shapeToFeature = require("./shapeToFeature");

describe("Mappers - shapeToFeature", () => {
	it("Should map a content polygon shape to a feature", () => {
		const shape = wegenwerkenContentMock.content1.fields.map.shapes[0];
		const result = shapeToFeature(wegenwerkenContentMock.content1, shape);

		expect(result).to.be.an("object");
		expect(result.type).to.equal("Feature"),
		expect(result.geometry).to.deep.equal(shape.geometry);
		expect(result.properties).to.be.an("object");
		expect(result.properties).to.have.property("F_id", shape.uid);
		expect(result.properties).to.have.property("uuid", wegenwerkenContentMock.content1.uuid);
		expect(result.properties).to.have.property("title", wegenwerkenContentMock.content1.fields.title.nl);
		expect(result.properties).to.have.property("intro", wegenwerkenContentMock.content1.fields.description.nl);
		expect(result.properties).and.have.property("lastModified", wegenwerkenContentMock.content1.meta.lastModified);
		expect(result.properties).and.have.property("created", wegenwerkenContentMock.content1.meta.created);
		expect(result.properties).and.have.property("link", wegenwerkenContentMock.content1.meta.slug.nl);
	});

	it("Should map a content point shape to a feature", () => {
		const shape = wegenwerkenContentMock.content1.fields.map.shapes[5];
		const result = shapeToFeature(wegenwerkenContentMock.content1, shape);

		expect(result).to.be.an("object");
		expect(result.type).to.equal("Feature"),
		expect(result.geometry).to.deep.equal(shape.geometry);
		expect(result.properties).to.be.an("object");
		expect(result.properties).to.have.property("F_id", shape.uid);
		expect(result.properties).to.have.property("uuid", wegenwerkenContentMock.content1.uuid);
		expect(result.properties).to.have.property("title", wegenwerkenContentMock.content1.fields.title.nl);
		expect(result.properties).to.have.property("intro", wegenwerkenContentMock.content1.fields.description.nl);
		expect(result.properties).and.have.property("lastModified", wegenwerkenContentMock.content1.meta.lastModified);
		expect(result.properties).and.have.property("created", wegenwerkenContentMock.content1.meta.created);
		expect(result.properties).and.have.property("link", wegenwerkenContentMock.content1.meta.slug.nl);
	})
});
