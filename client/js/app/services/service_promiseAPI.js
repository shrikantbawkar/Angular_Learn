myApp.factory("myServicePromiseAPI", function($http, $log){
	return {
		getData: function(){
			return $http.get("api/data/1"); 
		}
	}
}); 