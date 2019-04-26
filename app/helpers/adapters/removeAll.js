const request = require("request-promise");
const { path } = require("ramda");

const variablesHelper = require("../variables");

module.exports = (type) => {
	const layerUri = path(["layers", "variables", type])(variablesHelper.get());
	const credentials = path(["credentials", "variables"])(variablesHelper.get());

	return request({
		baseUrl: layerUri,
		uri: 'deleteFeatures',
		method: "POST",
		qs: {
			where: "1=1",
			f: "json",
		},
		auth: {
			user: credentials.account,
			pass: credentials.password
		},
		json: true
	})
}
