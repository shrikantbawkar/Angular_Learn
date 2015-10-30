myApp.directive("mySample1", function(){
	return {
		restrict: "A", //E,C,M
		link: function(scope, element, attrs, controllers){
			var markup = "<input type='text'></input>"; 
			element.html(markup); 
			
		}
	}
}); 

myApp.directive("mySample2", function($compile){
	return {
		restrict: "A", //E,C
		link: function(scope, element, attrs, controllers){
			var markup = "<input ng-model= 'msg' type='text' />{{msg}}"; 
			element.html(markup); 
			$compile(element.contents())(scope); 
		}
	}
}); 

myApp.directive("mySample3", function($compile){
	return {
		restrict: "A", //E,C,M
		link: function(scope, element, attrs, controllers){
			var markup = "<input ng-model= 'msg' type='text' />{{msg}}"; 
			element.html(markup); 
			$compile(element.contents())(scope); 
		}, 
		scope: {}
	}
}); 

myApp.directive("mySample4", function($compile){
	return {
		restrict: "E", //A,C,M
		template: "<input ng-model= 'msg' type='text' />{{msg}}", 
		scope: {}
	}
}); 

myApp.directive("mySample5", function($compile){
	return {
		restrict: "C", //A,E,M
		template: "<input ng-model= 'msg' type='text' />{{msg}}", 
		scope: {}
	}
}); 
