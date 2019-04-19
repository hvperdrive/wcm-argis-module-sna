const request = require("request-promise");
const { path } = require("ramda");

const variablesHelper = require("../variables");

module.exports = (type, features) => {
	const layerUri = path(["layers", "variables", type])(variablesHelper.get());

	return request({
		baseUrl: layerUri,
		uri: 'addFeatures',
		method: "POST",
		formData: {
			features: JSON.stringify(features),
			f: "json",
		},
		headers: {
			Authorization: "Basic SUNBXGV4MDI1Mzg6RGlzdHJpY3QwMg==",
		},
		json: true
	})
}
