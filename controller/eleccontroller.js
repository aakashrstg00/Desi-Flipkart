app.controller("ElectronicsController", function ($scope, ElecFactory) {
    $scope.welcomemsgelec = "Welcome to Mobile Section!!";
    console.log("Checking");
    $scope.sortBy = "name";
    var promise = ElecFactory.getJson();
    promise.then(function (data) {
        $scope.result = data.data;
    }, function (error) {
        $scope.error = error;
    });
});