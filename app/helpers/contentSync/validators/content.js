const { path } = require("ramda");

const variables = require("../../variables");

module.exports = (content) => {
	const { variables: { contentTypes: { variables: config } } } = variables.get();

	return path(["meta", "contentType", "_id"])(content) === config.wegenWerkenContentTypeId;
}
