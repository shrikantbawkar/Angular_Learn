myApp.controller("directive_ScopeHandling", function($scope){
	$scope.eventsObj = ["AngularJS", "BackboneJS", "ExtJS", "KnockoutJS"]; 
	$scope.eventsObjMethod = function(val){
		alert("val in main controller : "+val); 
		//return val;  
	} 	
}); 