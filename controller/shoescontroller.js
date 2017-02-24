app.controller("ShoesController", function ($scope, ShoesFactory) {
    $scope.msg = "Welcome to Shoes Section!!";
    $scope.sortBy = "name";
    console.log("Checking");
    var promise = ShoesFactory.getJson();
    promise.then(function (data) {
        $scope.result = data.data;
    }, function (error) {
        $scope.error = error;
    });
});