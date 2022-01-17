(function(angular) {
	angular.module("wcm-arcgis-sna_1.4.8")
		.provider("arcgisSNAConfig", [

			"MODULE_ENV_CONFIG",

			function testConfig(MODULE_ENV_CONFIG) {

				this.API = {
					name: MODULE_ENV_CONFIG.angularModule,
					version: "1.4.4",
					feDirPath: MODULE_ENV_CONFIG.feDirPath,
					assetsDirPath: MODULE_ENV_CONFIG.assetsDirPath,
					cssDirPath: MODULE_ENV_CONFIG.cssDirPath
				};

				this.API.modulePath = this.API.feDirPath;

				this.$get = function get() {
					return this.API;
				};
			}
		]);
})(window.angular);
