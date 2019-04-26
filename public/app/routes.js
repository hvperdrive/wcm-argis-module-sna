(function(angular) {
	angular.module("wcm-arcgis-sna_0.0.1")
		.config([

			"$stateProvider",
			"boilerplateConfigProvider",

			function ($stateProvider, boilerplateConfigProvider) {

				var moduleFolder = boilerplateConfigProvider.API.modulePath;

				$stateProvider

					.state("pelorus.wcm-arcgis-sna.index", {
						url: "",
						access: {
							requiresLogin: true
						},
						resolve: {
							ListData: ["boilerplateFactory", function(boilerplateFactory) {
								return boilerplateFactory.get({ id: "public" }).$promise;
							}],
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
