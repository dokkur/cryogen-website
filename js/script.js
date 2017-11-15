angular.module("app", apps)
.controller('adminController', function($scope, $rootScope, $http, $timeout, $interval) {	
})
.controller('editorsMonitorController', function($scope, $http, $filter, $interval) {
	$scope.initMonitor = function(){
		var ip = localStorage.getItem('monitor_on');
		if(ip && $scope.monitor_ip == ip){
			$scope.version = 0;
			$interval(function(){
				var version = parseInt(localStorage.getItem('css_version'));
				if(version && $scope.version < version){
					$scope.version = version;
					$scope.my_style =  localStorage.getItem('css_style');
				}
				
			}, 100);
		}
	}
})
.directive('resize', function ($window) {
    return function (scope, element, attr) {
        var w = angular.element($window);
        scope.$watch(function () {
            return {
                'h': w[0].innerHeight, 
                'w': w[0].innerWidth
            };
        }, function (newValue) {
            scope.windowHeight = newValue.h;
            scope.windowWidth = newValue.w;
        }, true);

        w.bind('resize', function () {
            scope.$apply();
        });
    }
});