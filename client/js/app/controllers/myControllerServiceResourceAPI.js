myApp.controller("service_Resource", function($scope, myServiceResource){
	$scope.msg = "1"; 
	$scope.sortorder = "name"; 
	var d = myServiceResource.getData(); 
	
	//for(i in d["promise"]) console.log(i+"  ::  "+d[i]); 
	//$scope.event = d[0][0]; 
	//$scope.sessions = d[1]; 

}); 
