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
					});

				});

			}
		}
	});
myThroneModule.controller('listitems',
	['$scope',function($scope){
		$scope.items = [
			{value: "one"},
			{value: "two"},
			{value: "three"},
			{value: "four"},
			{value: "five"},
			{value: "six"},
			{value: "seven"},
			{value: "eight"}
		];
		$scope.gotopageClick = function(page_pos) {
			$scope.page_pos = page_pos;

          	$scope.gotopage = true;
      	}
		
	}]);
/*myThroneModule.directive('listitems', function(){
	return{
		restrict: 'E',
		templateUrl: 'templates/directives/listitems.html',
		transclude: true,
		controller: function($scope){
			$scope.items = [
				{value: "one"},
				{value: "two"},
				{value: "three"},
				{value: "four"},
				{value: "five"},
				{value: "six"}
			]; 
		}
	}
});*/

myThroneModule.directive('pagination', function(){
	return{
		restrict: 'E',
		templateUrl: 'templates/directives/pagination-template.html',
		transclude: true,
		controller: function($scope){
			$scope.totalItems = $scope.items.length;
			$scope.limit = 3;
			$scope.pages = Math.ceil($scope.totalItems / $scope.limit);
			$scope.arraytotal = [];
			for(var i = 1; i <= $scope.pages; i++){
				$scope.arraytotal[i-1] = i;
			};
			
			$scope.$watch('gotopage', function(){

				if(!$scope.page_pos){
					$scope.page_pos = 1;
				}  
			    var show_per_page = $scope.limit;  
			    start_from = ($scope.page_pos -1) * show_per_page;  
			    end_on = start_from + show_per_page; 
			    $('.list-items').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');  
			});

		}
	}
});

