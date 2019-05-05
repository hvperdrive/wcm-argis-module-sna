(function(angular) {
	angular.module("wcm-arcgis-sna_1.0.1.factories", []);
	angular.module("wcm-arcgis-sna_1.0.1.services", ["wcm-arcgis-sna_1.0.1.factories"]);
	angular.module("wcm-arcgis-sna_1.0.1.controllers", ["wcm-arcgis-sna_1.0.1.services"]);
	angular.module("wcm-arcgis-sna_1.0.1.directives", ["wcm-arcgis-sna_1.0.1.controllers"]);

	angular.module("wcm-arcgis-sna_1.0.1", [

		"pelorus.services",

		"wcm-arcgis-sna_1.0.1.factories",
		"wcm-arcgis-sna_1.0.1.services",
		"wcm-arcgis-sna_1.0.1.controllers",
		"wcm-arcgis-sna_1.0.1.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

