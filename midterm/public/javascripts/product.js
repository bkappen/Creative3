angular.module('midterm', [])
    .controller('MainCtrl', [
        '$scope', '$http',
        function($scope, $http) {
            $scope.products = [];
            $scope.addProduct = function() {
                var newproduct = { title: $scope.nameContent, price: $scope.priceContent, URL: $scope.picContent, ordered: 0 };
                $http.post('/products', newproduct).success(function(data) {
                    $scope.products.push(data);
                });
                $scope.nameContent = '';
                $scope.priceContent = '';
                $scope.picContent = '';
                $scope.products.push(newproduct);
            };
            $scope.incrementOrders = function(product) {
                $http.put('/products/' + product._id + '/order')
                    .success(function(data) {
                        product.ordered += 1;
                    });
            };
            $scope.delete = function(product) {
                $http.delete('/products/' + product._id)
                    .success(function(data) {
                        console.log("delete worked");
                        $scope.getAll();
                    });
            };
            $scope.getAll = function() {
                return $http.get('/products').success(function(data) {
                    angular.copy(data, $scope.products);
                });
            };
            $scope.getAll();
        }


    ]);
