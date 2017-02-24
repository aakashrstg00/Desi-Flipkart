app.controller("ClothingController", function ($scope, ClothingFactory) {
    $scope.welcomemsgclothing = "Welcome to Clothing Section!!";
    console.log("Checking");
    $scope.sortBy = "name";
    var promise = ClothingFactory.getJson();
    promise.then(function (data) {
        $scope.result = data.data;
    }, function (error) {
        $scope.error = error;
    });
});