(function(angular) {
	angular.module("wcm-arcgis-sna_1.4.3.factories", []);
	angular.module("wcm-arcgis-sna_1.4.3.services", ["wcm-arcgis-sna_1.4.3.factories"]);
	angular.module("wcm-arcgis-sna_1.4.3.controllers", ["wcm-arcgis-sna_1.4.3.services"]);
	angular.module("wcm-arcgis-sna_1.4.3.directives", ["wcm-arcgis-sna_1.4.3.controllers"]);

	angular.module("wcm-arcgis-sna_1.4.3", [

		"pelorus.services",

		"wcm-arcgis-sna_1.4.3.factories",
		"wcm-arcgis-sna_1.4.3.services",
		"wcm-arcgis-sna_1.4.3.controllers",
		"wcm-arcgis-sna_1.4.3.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

