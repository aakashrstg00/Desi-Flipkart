app.controller("ShoesController", function ($scope, ShoesFactory) {
    $scope.msg = "Welcome to Shoes Section!!";
    $scope.revdisp = ($scope.rev) ? "true" : "false";
    $scope.sortBy = "name";
    console.log("Checking");
    var promise = ShoesFactory.getJson();
    promise.then(function (data) {
        $scope.result = data.data;
    }, function (error) {
        $scope.error = error;
    });
});