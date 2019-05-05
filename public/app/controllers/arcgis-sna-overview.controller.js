(function(angular) {
	angular.module("wcm-arcgis-sna_1.0.1.controllers")
		.controller("arcgisSNAOverviewController", [

			"$scope",
			"$timeout",

			// Factories
			"arcgisSNAFactory",

			// Services
			"LabelService",
			"NotificationService",

			function (
				$scope,
				$timeout,
				arcgisSNAFactory,
				LabelService,
				NotificationService
			) {

				$scope.reindexing = false;

				$scope.reindexSearch = function() {
					$scope.reindexing = true;

					arcgisSNAFactory
						.reindexSearch()
						.then(function() {
							NotificationService.showNotification(
								LabelService.getString("The search is reindexing..."),
								"top",
								"success",
								7000
							);

							$timeout(function() {
								$scope.reindexing = false;
							}, 10000);
						}, function(err) {
							NotificationService.showNotification(
								LabelService.getString(err),
								"top",
								"error",
								7000
							);

							$scope.reindexing = false;
						});
				};
			}
		]);
})(window.angular);
