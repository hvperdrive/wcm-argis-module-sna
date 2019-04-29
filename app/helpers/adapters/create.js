const request = require("request-promise");
const { path } = require("ramda");

const variablesHelper = require("../variables");
const responseParser = require("./helpers/responseParser");

module.exports = (type, features) => {
	const layerUri = path(["layers", "variables", type])(variablesHelper.get());
    const credentials = path(["credentials", "variables"])(variablesHelper.get());

	return request({
		baseUrl: layerUri,
		uri: 'addFeatures',
		method: "POST",
		formData: {
			features: JSON.stringify(features),
			f: "json",
		},
		auth: {
			user: credentials.account,
			pass: credentials.password
		},
		json: true
	}).then(responseParser);
};
