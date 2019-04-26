const { pathOr, either, compose } = require("ramda");

const variables = require("../../variables");

const getContentTypeId = (content) => compose(
	(ct) => ct.toString(),
	either(
		pathOr("", ["meta", "contentType", "_id"]),
		pathOr("", ["meta", "contentType"])
	)
)(content);

module.exports = (content) => {
	const { contentTypes: { variables: config } } = variables.get();

	return getContentTypeId(content) === config.wegenWerkenContentTypeId;
}
