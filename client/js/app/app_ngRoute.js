var myApp = angular.module("myApp", ["ngRoute"])
			.config(function($routeProvider){
				$routeProvider.when("/service", {
					templateUrl: "view/service_callback.html"
				}); 
				$routeProvider.when("/test", {
					template: "<div>This is test data in routing !!</div>"
				}); 
				$routeProvider.when("/event/:eventID", {
					template: "<div>This is test data in routing ID based : Your ID is {{routeID.eventID}}</div>"
				}); 
				$routeProvider.otherwise({
					redirectTo: "/service"
				}); 
			}); 
