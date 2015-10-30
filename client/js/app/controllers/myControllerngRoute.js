myApp.controller("my-ctrl", function($scope, myService, $routeParams){
	$scope.msg = "1"; 
	$scope.sortorder = "name"; 
	$scope.routeID = $routeParams;
		
	myService.getData(function(d){
		$scope.event = d[0][0]; 
		$scope.sessions = d[1]; 
	}); 
	
}); 
