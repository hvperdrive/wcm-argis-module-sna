module.exports = ({
	wegenWerkenId = "WEGENWERKEN_CT_ID"
} = {}) => {
	return {
		get: () => ({
			contentTypes: {
				variables: {
					wegenWerkenContentTypeId: wegenWerkenId
				}
			},
			layers: {
				variables: {
					point: "https://geoint-a.antwerpen.be/arcgis/rest/services/A_SNA/SNA_werven_pt_wgs84/FeatureServer/0/",
					poly: "https://geoint-a.antwerpen.be/arcgis/rest/services/A_SNA/SNA_werven_poly_wgs84/FeatureServer/0/"
				},
			}
		})
	};
};
