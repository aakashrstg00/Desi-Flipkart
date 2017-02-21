app.config(function ($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "home.html"
    }).when("/shoes", {
        templateUrl: "shoes.html"
        , controller: "ShoesController"
    }).when("/clothing", {
        templateUrl: "clothing.html"
        , controller: "ClothingController"
    }).when("/electronics", {
        templateUrl: "electronics.html"
        , controller: "ElectronicsController"
    }).when("/aboutus", {
        templateUrl: "aboutus.html"
    }).otherwise({
        template: "Error Page , No Match Found"
        , redirectTo: "/"
    });
});