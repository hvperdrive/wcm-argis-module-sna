const sinon = require("sinon");

class ContentModel {
	constructor(response) {
		this.spies = {};
		this.response = response;

		this.find = this._setSpy("find");
		this.count = this._setSpy("count", this.response);
		this.skip = this._setSpy("skip");
		this.limit = this._setSpy("limit");
		this.lean = this._setSpy("lean");
		this.exec = this._setSpy("exec", this.response);
	}

	_setSpy(type, response) {
		this.spies[type] = sinon.spy(() => response ? response : this);

		return this.spies[type];
	}
}

module.exports = ContentModel;
