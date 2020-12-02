(function(angular) {
	angular.module("wcm-arcgis-sna_1.2.0.factories")
		.factory("arcgisSNAFactory", [

			"$http",
			"configuration",

			function crmFactory($http, configuration) {

				var api = configuration.serverPath + configuration.apiPrefix + configuration.apiLevel;
				var factory = {};

				factory.reindexSearch = function() {
					return $http.put(api + "arcgis-sna/resync");
				};

				return factory;
			},
		]);
})(window.angular);

