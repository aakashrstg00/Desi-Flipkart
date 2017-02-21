app.factory("ShoesFactory", function ($http, $q) {
    var object = {
        getJson: function () {
            var pr = $q.defer();
            $http.get("../json/shoes.json").then(function (data) {
                pr.resolve(data);
                console.log("data recieved");
            }, function (error) {
                pr.reject(error);
                console.log("data not recieved");
            });
            return pr.promise;
        }
    };
    return object;
});