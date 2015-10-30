var myApp = angular.module("myApp", ["ui.router", "ngSanitize", "ngResource", "ngGrid", "ui.bootstrap"]); 

myApp.run(function($rootScope){
	$rootScope.$on("handleCtrlChange", function(evt, args){
		$rootScope.$broadcast("handleBroadcastEvt", args); 
	});
}); 

myApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/scope");
	
	$stateProvider
		.state("scope", {
			url: "/scope", 
			templateUrl: "view/scope.html", 
			controller: function($scope, $state)
			{
				$scope.msg = "<div class='dummyClass'><b><i>Dummy test</i></b></div>"; 
				document.getElementById("btn").addEventListener("click", function(){ 								
					$scope.$apply(function(){
						$scope.msg = "Changed text!!"; 					
					}); 
				}); 
				
				$scope.angularBtn = function(){
					$scope.myVar = 10;
					$scope.msg = "Angular btn changed text!!"; 	
					$state.go("watch", {paramObj: $scope.obj, secondParam: "second value!!"})
				}
			}
		})
		.state("watch", {
			url: "/watch", 
			templateUrl: "view/watch.html", 
			params: {paramObj: null, secondParam: null}, 
			controller: function($scope, $stateParams)
			{
				$scope.angularStateParam = $stateParams.paramObj+"  ####  "+$stateParams.secondParam;
				
				$scope.$watch("msg1", function(newVal, oldVal){ 							
					if(newVal) if(newVal.length > 0) $scope.newMsg1 = "Greeting, "+newVal; 
				}); 
				$scope.updateVal = function(newVal){
					if(newVal.length > 0) $scope.newMsg2 = "Greeting, "+newVal; 
				} 
			}
		})
		.state("custom_filters", {
			url: "/custom_filters", 
			templateUrl: "view/custom_filters.html", 
			controller: "custom_filters"
		})
		.state("publisher_Subscriber", {
			url: "/publisher_Subscriber", 
			templateUrl: "view/publisher_Subscriber.html"
		})
		.state("service", {
			url: "/service", 
			templateUrl: "view/service.html"
		})
		.state("service.service_callback", {
			url: "/service_callback", 
			templateUrl: "view/service_callback.html", 
			controller: "service_callback"
		})
		.state("service.service_Promise", {
			url: "/service_Promise", 
			templateUrl: "view/service-promiseAPI.html", 
			controller: "service_PromiseAPI"
		})
		.state("service.service_Promise_Custom", {
			url: "/service_Promise_Custom", 
			templateUrl: "view/service-promiseAPI-custom.html", 
			controller: "service_PromiseAPICustom"
		})
		.state("service.service_Resource", {
			url: "/service_Resource", 
			templateUrl: "view/service-resourceAPI.html", 
			controller: "service_Resource"
		}). 
		state("directive", {
			url: "/directive", 
			templateUrl: "view/directives.html"
		})
		.state("directive.directive_Simple", {
			url: "/directive_Simple", 
			templateUrl: "view/directive_Simple.html"
		})
		.state("directive.directive_ScopeHandling", {
			url: "/directive_ScopeHandling", 
			templateUrl: "view/directive_ScopeHandling.html", 
			controller: "directive_ScopeHandling"
		})
		.state("directive.directive_EventHandling", {
			url: "/directive_EventHandling", 
			templateUrl: "view/directive_EventHandling.html"
		})
		.state("directive.directive_Transclusion", {
			url: "/directive_Transclusion", 
			templateUrl: "view/directive_Transclusion.html"
		}). 
		state("angularCustomModules", {
			url: "/angularCustomModules", 
			templateUrl: "view/angularCustomModules.html" 
		})
		.state("angularCustomModules.ng_grid", {
			url: "/ng_grid", 
			templateUrl: "view/ng_grid.html", 
			controller: "ng_grid"
		})
		.state("angularCustomModules.angularUIBootstrap", {
			url: "/angularUIBootstrap", 
			templateUrl: "view/angularUIBootstrap.html"
		})
		.state("angularCustomModules.angularUIBootstrap.angularUIBootstrap_alert", {
			url: "/angularUIBootstrap_alert", 
			templateUrl: "view/angularUIBootstrap_alert.html", 
			controller: "angularUIBootstrap_alert"
		})
		.state("angularCustomModules.angularUIBootstrap.angularUIBootstrap_Datepicker", {
			url: "/angularUIBootstrap_Datepicker", 
			templateUrl: "view/angularUIBootstrap_Datepicker.html", 
			controller: "angularUIBootstrap_Datepicker"
		})
		.state("angularCustomModules.angularUIBootstrap.angularUIBootstrap_ModalLightBox", {
			url: "/angularUIBootstrap_ModalLightBox", 
			templateUrl: "view/angularUIBootstrap_ModalLightBox.html", 
			controller: "angularUIBootstrap_ModalLightBox"
		})
		.state("angularCustomModules.angularUIBootstrap.angularUIBootstrap_Pagination", {
			url: "/angularUIBootstrap_Pagination", 
			templateUrl: "view/angularUIBootstrap_Pagination.html", 
			controller: "angularUIBootstrap_Pagination"
		})
		.state("angularCustomModules.angularUIBootstrap.angularUIBootstrap_Popover", {
			url: "/angularUIBootstrap_Popover", 
			templateUrl: "view/angularUIBootstrap_Popover.html", 
			controller: "angularUIBootstrap_Popover"
		})
		.state("angularCustomModules.angularUIBootstrap.angularUIBootstrap_Progressbar", {
			url: "/angularUIBootstrap_Progressbar", 
			templateUrl: "view/angularUIBootstrap_Progressbar.html", 
			controller: "angularUIBootstrap_Progressbar"
		})
		.state("angularCustomModules.angularUIBootstrap.angularUIBootstrap_Rating", {
			url: "/angularUIBootstrap_Rating", 
			templateUrl: "view/angularUIBootstrap_Rating.html", 
			controller: "angularUIBootstrap_Rating"
		})
				
}); 

myApp.controller("my-ctrl-ps1", function($scope){
	$scope.ctrlChanged = function(){
		$scope.$emit("handleCtrlChange", {arg: $scope.msg, frm: "1"}); 
	}
	$scope.$on("handleBroadcastEvt", function(evt, args){
		$scope.newMsg = "Greeting from Ctrl: "+args.frm+" and text is "+args.arg; 
	});
}); 

myApp.controller("my-ctrl-ps2", function($scope){
	$scope.ctrlChanged = function(){
		$scope.$emit("handleCtrlChange", {arg: $scope.msg, frm: "2"}); 
	}
	$scope.$on("handleBroadcastEvt", function(evt, args){
		$scope.newMsg = "Greeting from Ctrl: "+args.frm+" and text is "+args.arg; 
	});
}); 

myApp.controller("my-ctrl-ps3", function($scope){
	$scope.ctrlChanged = function(){
		$scope.$emit("handleCtrlChange", {arg: $scope.msg, frm: "3"}); 
	}
	$scope.$on("handleBroadcastEvt", function(evt, args){
		$scope.newMsg = "Greeting from Ctrl: "+args.frm+" and text is "+args.arg; 
	});
}); 
