(function(angular) {
	angular.module("wcm-arcgis-sna_1.4.10.factories", []);
	angular.module("wcm-arcgis-sna_1.4.10.services", ["wcm-arcgis-sna_1.4.10.factories"]);
	angular.module("wcm-arcgis-sna_1.4.10.controllers", ["wcm-arcgis-sna_1.4.10.services"]);
	angular.module("wcm-arcgis-sna_1.4.10.directives", ["wcm-arcgis-sna_1.4.10.controllers"]);

	angular.module("wcm-arcgis-sna_1.4.10", [

		"pelorus.services",

		"wcm-arcgis-sna_1.4.10.factories",
		"wcm-arcgis-sna_1.4.10.services",
		"wcm-arcgis-sna_1.4.10.controllers",
		"wcm-arcgis-sna_1.4.10.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

