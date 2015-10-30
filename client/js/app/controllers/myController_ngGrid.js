myApp.controller("ng_grid", function($scope){
	$scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { 
        data: 'myData'
    };	
    $scope.$on('ngGridEventData', function(){
        $scope.gridOptions.selectRow(0, true);
    });
    $scope.selectEnosRow = function(){
        angular.forEach($scope.myData, function(data, index){
            if(data.name == 'Enos'){
                $scope.gridOptions.selectItem(index, true);
            }
        });
    };
}); 
