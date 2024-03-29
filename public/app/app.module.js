(function(angular) {
	angular.module("wcm-arcgis-sna_1.4.4.factories", []);
	angular.module("wcm-arcgis-sna_1.4.4.services", ["wcm-arcgis-sna_1.4.4.factories"]);
	angular.module("wcm-arcgis-sna_1.4.4.controllers", ["wcm-arcgis-sna_1.4.4.services"]);
	angular.module("wcm-arcgis-sna_1.4.4.directives", ["wcm-arcgis-sna_1.4.4.controllers"]);

	angular.module("wcm-arcgis-sna_1.4.4", [

		"pelorus.services",

		"wcm-arcgis-sna_1.4.4.factories",
		"wcm-arcgis-sna_1.4.4.services",
		"wcm-arcgis-sna_1.4.4.controllers",
		"wcm-arcgis-sna_1.4.4.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

