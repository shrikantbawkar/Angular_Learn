myApp.factory("myServiceResource", function($resource){
	return {
		getData: function(){
			return $resource("api/data/1").get(); 
		}
	}
}); 