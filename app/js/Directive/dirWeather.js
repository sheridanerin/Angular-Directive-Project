angular.module('directivePractice')
	.directive('dirWeather', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/js/Directive/dirWeather.html',
			scope: {
				currentUser: '='
			},
			controller: function($scope, weatherService) {
				weatherService.getWeather($scope.currentUser.city).then(function(response) {
					$scope.weather = response.data.weather;
				});
			}
		}	
})