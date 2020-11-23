const request = require("request-promise");
const { path } = require("ramda");

const variablesHelper = require("../variables");

module.exports = (type, features) => {
	const layerUri = path(["layers", "variables", type])(variablesHelper.get());
	const credentials = path(["credentials", "variables"])(variablesHelper.get());

	if (!features.length) {
		return Promise.resolve();
	}

	return request({
		baseUrl: layerUri,
		uri: 'updateFeatures',
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
  });
};
