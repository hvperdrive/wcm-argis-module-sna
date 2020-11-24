(function(angular) {
	angular.module("wcm-arcgis-sna_1.1.0.factories", []);
	angular.module("wcm-arcgis-sna_1.1.0.services", ["wcm-arcgis-sna_1.1.0.factories"]);
	angular.module("wcm-arcgis-sna_1.1.0.controllers", ["wcm-arcgis-sna_1.1.0.services"]);
	angular.module("wcm-arcgis-sna_1.1.0.directives", ["wcm-arcgis-sna_1.1.0.controllers"]);

	angular.module("wcm-arcgis-sna_1.1.0", [

		"pelorus.services",

		"wcm-arcgis-sna_1.1.0.factories",
		"wcm-arcgis-sna_1.1.0.services",
		"wcm-arcgis-sna_1.1.0.controllers",
		"wcm-arcgis-sna_1.1.0.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

