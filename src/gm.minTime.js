(function(angular) {
	'use strict';
	angular.module('gm.minTime', [])
	.directive('minTime', function () {
		return {
			require: 'ngModel',
			restrict: 'A',
			link: function(scope, elem, attrs, ctrl) {
				var minTime;

				function validate(value) {
					var modelValue = ctrl.$modelValue;

					if(typeof modelValue == 'string') {
						var timeValue = Date.parse(modelValue);
						if(!isNaN(timeValue))
							modelValue = timeValue;
					}

					ctrl.$setValidity('minTime', minTime < modelValue);
					return value;
				}

				scope.$watch(attrs.minTime, function(newVal) {
					if(typeof newVal == 'string') {
						var timeValue = Date.parse(newVal);
						if(!isNaN(timeValue))
							newVal = timeValue;
					}

					minTime = newVal;
					validate();
				});

				scope.$watch(attrs.ngModel, validate);
			}
		};
	});
})(window.angular);
