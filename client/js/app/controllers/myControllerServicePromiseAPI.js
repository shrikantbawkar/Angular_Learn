myApp.controller("service_PromiseAPI", function($scope, myServicePromiseAPI){
	$scope.msg = "1"; 
	$scope.sortorder = "name"; 
	myServicePromiseAPI.getData().then(function(value){
		$scope.event = value.data[0][0]; 
		$scope.sessions = value.data[1]; 
	}, 
	function(error){
		console.log("Promise API error : "+error.data);
	}); 
	
}); 
