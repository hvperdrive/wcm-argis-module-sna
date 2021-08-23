(function(angular) {
	angular.module("wcm-arcgis-sna_1.4.2.factories", []);
	angular.module("wcm-arcgis-sna_1.4.2.services", ["wcm-arcgis-sna_1.4.2.factories"]);
	angular.module("wcm-arcgis-sna_1.4.2.controllers", ["wcm-arcgis-sna_1.4.2.services"]);
	angular.module("wcm-arcgis-sna_1.4.2.directives", ["wcm-arcgis-sna_1.4.2.controllers"]);

	angular.module("wcm-arcgis-sna_1.4.2", [

		"pelorus.services",

		"wcm-arcgis-sna_1.4.2.factories",
		"wcm-arcgis-sna_1.4.2.services",
		"wcm-arcgis-sna_1.4.2.controllers",
		"wcm-arcgis-sna_1.4.2.directives"

	])
	.run([function () {
		console.log("Arcgis SNA syncing module is loaded and available!"); // eslint-disable-line no-console
	}]);
})(window.angular);

