myApp.directive("eventHandle", function($compile){
	return {
		restrict: "E", //E,C,M
		link: function(scope, element, attrs, controllers){
			var markup = "<input ng-model= 'msg' type='text' />&nbsp;"; 
			element.html(markup); 
			$compile(element.contents())(scope); 
			
			element.on("keydown", function(event){
				alert("event.keyCode : "+event.keyCode); 
			}); 
			
		}, 
		scope: {}, 
		controller: function($scope){
			$scope.msg = "init text"; 
		}
	}
}); 
