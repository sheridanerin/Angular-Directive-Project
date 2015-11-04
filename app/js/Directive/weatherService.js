angular.module('directivePractice')
	.service('weatherService', function($http) {

		this.getWeather = function(city) {

			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=2e2a456ed73c7205bc66e31c3255f4ff');

		}

	});