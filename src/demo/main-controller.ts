import angular = require("angular");

mainCtrl.$inject = ["$scope", "mainservice"];
function mainCtrl($scope, mainservice) {
    $scope.name = "kikodo";
    mainservice.check().then((data) => {
        $scope.weather = data;
    })
}

export = mainCtrl;