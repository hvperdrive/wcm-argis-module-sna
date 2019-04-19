const { models: { Content: ContentModel } } = require("@wcm/module-helper");

module.exports = () => {
	const ctId = path(["variables", "contentTypes", "variables", "wegenWerkenContentTypeId"])(variablesHelper.get());

	return ContentModel.find({ "meta.contentType": ctId })
		.skip(skip)
		.limit(limit)
		.lean()
		.exec();
}
