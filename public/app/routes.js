(function(angular) {
	angular.module("wcm-arcgis-sna_1.2.0")
		.config([

			"$stateProvider",
			"arcgisSNAConfigProvider",

			function ($stateProvider, arcgisSNAConfigProvider) {

				var moduleFolder = arcgisSNAConfigProvider.API.modulePath;

				$stateProvider

					.state("pelorus.wcm-arcgis-sna.index", {
						url: "",
						access: {
							requiresLogin: true
						},
						ncyBreadcrumb: {
							label: "{{breadcrumb}}"
						},
						views: {
							"": {
								templateUrl: moduleFolder + "views/overview.html",
								controller: "arcgisSNAOverviewController"
							}
						}
					});
			}
		]);
})(window.angular);
