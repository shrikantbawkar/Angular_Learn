myApp.controller("custom_filters", function($scope){
	$scope.msg = "1"; 
	$scope.sortorder = "name"; 
	$scope.event = {
		name: "Learning", 
		date: "29/01/2015", 
		time: "16.24 PM", 
		duration: "4", 
		price: "2000", 
		city: "pune", 
		district: "pune", 
		state: "maharashtra" 
	}; 
	$scope.sessions = [{
		name: "BackboneJS", 
		complexity: "Hard", 
		documentation: "available", 
		star: "4"
	}, 
	{
		name: "AngularJS", 
		complexity: "Easy", 
		documentation: "available", 
		star: "5"
	},
	{
		name: "KnockoutJS", 
		complexity: "medium", 
		documentation: "available", 
		star: "3"
	},
	{
		name: "ExtJS", 
		complexity: "Hard", 
		documentation: "available", 
		star: "5"				
	}]; 
}); 
