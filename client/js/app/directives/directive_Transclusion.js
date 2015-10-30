myApp.directive("eventTransclusion", function($compile){
	return {
		restrict: "E", //A,C,M
		transclude: true, 
		replace: false, 
		template: "<h4 ng-click='controllerClick()'>Title</h4><div ng-transclude>qwqwqwqwqw</div>", 
		scope: {}, 
		controller: function($scope){
			$scope.msg = "init text"; 
			$scope.controllerClick = function()
			{
				alert("You clicked title"); 
			}
		}
	}
}); 
