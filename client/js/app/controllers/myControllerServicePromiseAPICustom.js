myApp.controller("service_PromiseAPICustom", function($scope, myServicePromiseAPICustom){
	$scope.msg = "1"; 
	$scope.sortorder = "name"; 
	myServicePromiseAPICustom.getData().then(function(value){
		$scope.event = value[0][0]; 
		$scope.sessions = value[1]; 
	}, 
	function(error){
		console.log("Promise API error : "+error);
	}); 
	
}); 
