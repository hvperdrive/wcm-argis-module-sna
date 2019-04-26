const { path, either } = require("ramda");

const variables = require("../../variables");

const getContentTypeId = (content) => either(
    path(["meta", "contentType", "_id"]),
    path(["meta", "contentType"]),
)(content);

module.exports = (content) => {
	const { contentTypes: { variables: config } } = variables.get();

	return getContentTypeId(content) === config.wegenWerkenContentTypeId;
}
