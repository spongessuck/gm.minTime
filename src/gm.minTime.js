(function() {
	angular.module('gm.minTime', [])
	.directive('minTime', function (){ 
		return {
			require: 'ngModel',
			restrict: 'A',
			link: function(scope, elem, attrs, ctrl) {
				var minTime;

				scope.$watch(attrs.minTime, function(newVal) {
					minTime = newVal;
					validate();
				});

				scope.$watch(attrs.ngModel, validate);

				function validate(value) {
					ctrl.$setValidity('minTime', (minTime < ctrl.$modelValue));
					return value;
				}
			}
		};
	});
})();
