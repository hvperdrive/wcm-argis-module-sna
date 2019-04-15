const { expect } = require("chai");

const getShapes = require("./getShapes");

describe("Mappers - getShapes", () => {
	it("Should return the shapes of a content item", () => {
		const result = getShapes({
			fields: {
				map: {
					shapes: [{
						name: "shape 1"
					}, {
						name: "shape 2"
					}]
				}
			}
		});

		expect(result).to.deep.equal([{
			name: "shape 1"
		}, {
			name: "shape 2"
		}]);
	});

	it ("Should return an empty array if content is invalid", () => {
		const result = getShapes({
			lalala: {
				somethingelse: "boeja"
			}
		});

		expect(result)
			.to.be.an("array")
			.to.have.lengthOf(0);
	})
})
