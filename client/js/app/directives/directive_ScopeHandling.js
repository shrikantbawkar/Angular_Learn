myApp.directive("eventThumbnail", function($compile){
	return {
		restrict: "E", //A,C,M
		template: "<div>{{event}}</div>", 
		scope: {
			event: "=myEvent"
		}
	}
}); 

myApp.directive("eventThumbnailmethod", function($compile){
	return {
		restrict: "E", //A,C,M
		template: "<div>{{event}}&nbsp;&nbsp;&nbsp;&nbsp;<input type='button' ng-click='eventMethodFn(event)' value='{{event}}' /></div>", 
		scope: {
			eventMethodFn: "&eventMethod", 
			event: "=myEvent"
		}
	}
}); 

myApp.directive("eventThumbnailexpression", function($compile){
	return {
		restrict: "E", //A,C,M
		template: "<div>{{event}}</div>", 
		scope: {
			event: "@myExpression" 
		}
	}
}); 
