myApp.controller("service_callback", function($scope, myServiceCallback){
	$scope.msg = "1"; 
	$scope.sortorder = "name"; 
	myServiceCallback.getData(function(d){
		$scope.event = d[0][0]; 
		$scope.sessions = d[1]; 
	}); 
	
}); 
