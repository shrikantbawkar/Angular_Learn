myApp.factory("myServiceCallback", function($http, $log){
	return {
		getData: function(callback){
			$http.get("api/data/1")
				.success(function(data, status, header, config){
					callback(data); 					
				})
				.error(function(e){
					$log.info("error : "+e); 
				}); 
		}
	}
}); 