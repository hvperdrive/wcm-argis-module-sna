(function(angular) {
	angular.module("wcm-arcgis-sna_1.4.8.factories", []);
	angular.module("wcm-arcgis-sna_1.4.8.services", ["wcm-arcgis-sna_1.4.8.factories"]);
	angular.module("wcm-arcgis-sna_1.4.8.controllers", ["wcm-arcgis-sna_1.4.8.services"]);
	angular.module("wcm-arcgis-sna_1.4.8.directives", ["wcm-arcgis-sna_1.4.8.controllers"]);

	angular.module("wcm-arcgis-sna_1.4.8", [

		"pelorus.services",

		"wcm-arcgis-sna_1.4.8.factories",
		"wcm-arcgis-sna_1.4.8.services",
		"wcm-arcgis-sna_1.4.8.controllers",
		"wcm-arcgis-sna_1.4.8.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

