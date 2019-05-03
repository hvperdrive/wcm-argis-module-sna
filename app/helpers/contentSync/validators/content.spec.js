const { expect } = require("chai");
const mockery = require("mockery");

const variablesHelperMock = require("../../../../test/mocks/variablesHelper");

describe("Validators - Content", () => {
	let contentValidator;

	before(() => {
		mockery.enable({ warnOnUnregistered: false, useCleanCache: true });
		mockery.registerMock("../../variables", variablesHelperMock({ wegenWerkenId: "WEGENWERKEN_ID"}));

		contentValidator = require("./content");
	});

	after(() => {
		mockery.deregisterAll();
		mockery.disable();
	});

	it("Should return true when passing a valid content", () => {
		const result = contentValidator({
			meta: {
				contentType: {
					_id: "WEGENWERKEN_ID"
				}
			}
		});

		expect(result).to.be.true;
	});

	it("Should return false when passing an invalid content", () => {
		const result = contentValidator({
			meta: {
				contentType: {
					_id: "INVALID_ID"
				}
			}
		});

		expect(result).to.be.false;
	})
});
