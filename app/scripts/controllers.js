var myThroneModule = angular.module('appThrones', [
	'ui.router',
	'ui.select2'
	]);

myThroneModule.controller('ThronesController',
	['$scope', function($scope){
		 $scope.items = [
			 {house: 'Stark', words: 'Winter Is Coming'}, 
			 {house: 'Lannister', words: 'Hear Me Roar'},
			 {house: 'Baratheon', words: 'Ours Is The Fury'}, 
			 {house: 'Tully', words: 'Family, Duty, Honor'}, 
			 {house: 'Tyrell', words: 'Growing Strong'}, 
			 {house: 'Martell', words: 'Unbowed, Unbent, Unbroken'}, 
			 {house: 'Greyjoy', words: 'We So Not Sow'}, 
			 {house: 'Arryn', words: 'As High as Honor'}, 
			 {house: 'Targaryen', words: 'Fire and Blood'}
		];
	}]);



myThroneModule.directive('thrones', function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/thrones.html'
		}
	});

myThroneModule.controller('ToggleButton',
	['$scope',function($scope){
		$scope.items = [
			 {stateB: true, stateLabel: 'Public'}, 
			 {stateB: false, stateLabel: 'Private'}
		];
	}]);

myThroneModule.directive('checkbox', 
	function(){
		return {
			restrict: 'E',
			templateUrl: 'templates/directives/checkbox.html',
			link: function($scope, element, attrs){
				$scope.toggle = false;
				
				$scope.$watch('toggle', function(value){
					element.toggleClass('active', value);
					angular.forEach($scope.items, function(value, key){
						//console.log($scope.items);
						if(value.stateB == $scope.toggle){
							$scope.stateShow = value.stateLabel;
						}
					});
				});
				
				element.click(function(){
					$scope.$apply(function(){
						$scope.toggle = !$scope.toggle;
						console.log($scope.toggle);
					});

				});

			}
		}
	});

/*
$scope.remove = function(index) { 
			$scope.items.splice(index, 1);
		} 
myAppModule.controller('StartUpController',
	function($scope){
		$scope.funding = { staringEstimate: 0};

		computeNeeded = function(){
			$scope.funding.needed = $scope.funding.startingEstimate * 10;
		};
		$scope.$watch('funding.startingEstimate', computeNeeded);
		
	});*/

