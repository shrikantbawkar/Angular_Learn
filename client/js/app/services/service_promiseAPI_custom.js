myApp.factory("myServicePromiseAPICustom", function($http, $log, $q){
	return {
		getData: function(){
			var deffered = $q.defer();
			$http.get("api/data/1")
				.success(function(data, status, header, config){
					deffered.resolve(data); 					
				})
				.error(function(data, status, header, config){
					deffered.reject("Error : "+status); 
				}); 
			return deffered.promise; 
		}
	}
}); 