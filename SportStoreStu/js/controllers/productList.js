/**
 * Created by hxsd on 2016/12/15.
 */
angular.module("myapp")
    .controller("productListCtrl", function ($scope,shopCart) {
        $scope.selectedCategory = null;

        $scope.selectCategory = function (category) {
            $scope.selectedCategory = category;
            $scope.pageNum=1;
        };

        $scope.filterByCategory = function (product) {
            return $scope.selectedCategory == null || product.category == $scope.selectedCategory;
        };
        $scope.pageNum=1;
        $scope.pageSize=3;

        $scope.page=function(p){
            $scope.pageNum=p;
        };

        $scope.add=function(product){
            shopCart.add(product);
        };
    });