(function(angular) {
	angular.module("wcm-arcgis-sna_1.4.9.factories", []);
	angular.module("wcm-arcgis-sna_1.4.9.services", ["wcm-arcgis-sna_1.4.9.factories"]);
	angular.module("wcm-arcgis-sna_1.4.9.controllers", ["wcm-arcgis-sna_1.4.9.services"]);
	angular.module("wcm-arcgis-sna_1.4.9.directives", ["wcm-arcgis-sna_1.4.9.controllers"]);

	angular.module("wcm-arcgis-sna_1.4.9", [

		"pelorus.services",

		"wcm-arcgis-sna_1.4.9.factories",
		"wcm-arcgis-sna_1.4.9.services",
		"wcm-arcgis-sna_1.4.9.controllers",
		"wcm-arcgis-sna_1.4.9.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

