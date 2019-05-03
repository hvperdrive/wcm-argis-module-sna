const request = require("request-promise");
const { path } = require("ramda");

const variablesHelper = require("../variables");

module.exports = ({ qs, type }) => {
	const pointLayerUri = path(["variables", "layers", "variables", type])(variablesHelper.get());

	return request({
		baseUrl: pointLayerUri,
		uri: "query",
		qs: qs,
		headers: {
			Authorization: "Basic SUNBXGV4MDI1Mzg6RGlzdHJpY3QwMg==",
		},
		json: true
	});
}
