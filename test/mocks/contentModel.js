const sinon = require("sinon");

class ContentModel {
	constructor() {
		this.spies = {};
	}

	find = this._setSpy("find");
	count = this._setSpy("count");
	skip = this._setSpy("skip");
	limit = this._setSpy("limit");
	lean = this._setSpy("lean");
	exec = this._setSpy("exec");

	_setSpy(type) {
		return (...args) => {
			this.spies[type] = sinon.spy(() => this)(...args);

			return this.spies[type];
		}
	}
}

module.exports = ContentModel;
