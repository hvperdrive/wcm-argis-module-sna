const request = require("request-promise");
const { path } = require("ramda");

const variablesHelper = require("../variables");

module.exports = ({ qs, type }) => {
	const pointLayerUri = path(["layers", "variables", type])(variablesHelper.get());
	const credentials = path(["credentials", "variables"])(variablesHelper.get());

	return request({
		baseUrl: pointLayerUri,
		uri: "query",
		qs: qs,
		auth: {
			user: credentials.account,
			pass: credentials.password
		},
		json: true
	});
}
