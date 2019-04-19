const request = require("request-promise");
const { path } = require("ramda");

const variablesHelper = require("../variables");

module.exports = (type) => {
	const layerUri = path(["layers", "variables", type])(variablesHelper.get());

	return request({
		baseUrl: layerUri,
		uri: 'deleteFeatures',
		method: "POST",
		qs: {
			where: "1=1",
			f: "json",
		},
		headers: {
			Authorization: "Basic SUNBXGV4MDI1Mzg6RGlzdHJpY3QwMg==",
		},
		json: true
	})
}
