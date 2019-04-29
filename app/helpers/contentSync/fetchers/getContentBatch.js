const { path } = require("ramda");
const { models: { Content: ContentModel } } = require("@wcm/module-helper");
const variablesHelper = require("../../variables");

module.exports = (skip, limit) => {
    const ctId = path(["contentTypes", "variables", "wegenWerkenContentTypeId"])(variablesHelper.get());

	return ContentModel.find({
        "meta.contentType": ctId,
        "meta.deleted": false,
        "meta.published": true
    })
		.skip(skip)
		.limit(limit)
		.lean()
		.exec();
}
