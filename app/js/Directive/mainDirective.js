angular.module('directivePractice')
	.directive('dirDisplay', function() {
		return {
			restrict: 'E',
			templateUrl: 'app/js/Directive/mainDirectiveTmpl.html',
			link: function(scope, element, attrs) {
				element.on('click', function() {
					scope.isVisible = !scope.isVisible;
					scope.$apply();
				})
			}
		}
})