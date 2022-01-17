const { expect } = require("chai");

const wegenwerkenContentMock = require("../../../../test/mocks/wegenwerkenContent");

const shapeToFeature = require("./shapeToFeature");

describe("Mappers - shapeToFeature", () => {
	it("Should map a content polygon shape to a feature", () => {
		const shape = wegenwerkenContentMock.content1.fields.map.shapes[0];
		const result = shapeToFeature(wegenwerkenContentMock.content1, shape);

		expect(result).to.be.an("object");
		expect(result.type).to.equal("Feature"),
		expect(result.geometry).to.deep.equal({
			...{"spatialReference": { "wkid": 4326} },
			rings: shape.geometry.coordinates
		});
		expect(result.attributes).to.be.an("object");
		expect(result.attributes).to.have.property("F_id", shape.uid);
		expect(result.attributes).to.have.property("uuid", wegenwerkenContentMock.content1.uuid);
		expect(result.attributes).to.have.property("title", wegenwerkenContentMock.content1.fields.title.nl);
		expect(result.attributes).to.have.property("intro", wegenwerkenContentMock.content1.fields.metaDescription.nl);
		expect(result.attributes).and.have.property("lastModified", wegenwerkenContentMock.content1.meta.lastModified);
		expect(result.attributes).and.have.property("created", wegenwerkenContentMock.content1.meta.created);
		expect(result.attributes).and.have.property("link", wegenwerkenContentMock.content1.meta.slug.nl);
	});

	it("Should map a content polyline shape to a feature", () => {
		const shape = wegenwerkenContentMock.content1.fields.map.shapes[0];
		const result = shapeToFeature(wegenwerkenContentMock.content1, shape);

		expect(result).to.be.an("object");
		expect(result.type).to.equal("Feature"),
		expect(result.geometry).to.deep.equal({
			...{"spatialReference": { "wkid": 4326} },
			rings: shape.geometry.coordinates
		});
		expect(result.attributes).to.be.an("object");
		expect(result.attributes).to.have.property("F_id", shape.uid);
		expect(result.attributes).to.have.property("uuid", wegenwerkenContentMock.content1.uuid);
		expect(result.attributes).to.have.property("title", wegenwerkenContentMock.content1.fields.title.nl);
		expect(result.attributes).to.have.property("intro", wegenwerkenContentMock.content1.fields.metaDescription.nl);
		expect(result.attributes).and.have.property("lastModified", wegenwerkenContentMock.content1.meta.lastModified);
		expect(result.attributes).and.have.property("created", wegenwerkenContentMock.content1.meta.created);
		expect(result.attributes).and.have.property("link", wegenwerkenContentMock.content1.meta.slug.nl);
	});

	it("Should map a content point shape to a feature", () => {
		const shape = wegenwerkenContentMock.content1.fields.map.shapes[5];
		const result = shapeToFeature(wegenwerkenContentMock.content1, shape);

		expect(result).to.be.an("object");
		expect(result.type).to.equal("Feature"),
		expect(result.geometry).to.deep.equal({
			...{"spatialReference": { "wkid": 4326} },
			x: shape.geometry.coordinates[0],
			y: shape.geometry.coordinates[1]
		});
		expect(result.attributes).to.be.an("object");
		expect(result.attributes).to.have.property("F_id", shape.uid);
		expect(result.attributes).to.have.property("uuid", wegenwerkenContentMock.content1.uuid);
		expect(result.attributes).to.have.property("title", wegenwerkenContentMock.content1.fields.title.nl);
		expect(result.attributes).to.have.property("intro", wegenwerkenContentMock.content1.fields.metaDescription.nl);
		expect(result.attributes).and.have.property("lastModified", wegenwerkenContentMock.content1.meta.lastModified);
		expect(result.attributes).and.have.property("created", wegenwerkenContentMock.content1.meta.created);
		expect(result.attributes).and.have.property("link", wegenwerkenContentMock.content1.meta.slug.nl);
	});
});
