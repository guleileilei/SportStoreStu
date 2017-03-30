/**
 * Created by hxsd on 2016/12/15.
 */
angular.module("myapp")
    .controller("sportStoreCtrl", function ($scope, $http, $location, shopCart) {
        $scope.data = {
            categories: [
                {id: 10001, category: "商品类别1"},
                {id: 10002, category: "商品类别2"},
                {id: 10003, category: "商品类别3"},
                {id: 10004, category: "商品类别4"}
            ],
            products: [
                {name: "商品01", category: "商品类别1", price: "100", desc: "2016新款", imgsrc: "images/TB1_50x50.jpg"},
                {name: "商品02", category: "商品类别1", price: "120", desc: "2016新款", imgsrc: "images/TB2_50x50.jpg"},
                {name: "商品03", category: "商品类别1", price: "80", desc: "2016新款", imgsrc: "images/TB3_50x50.jpg"},
                {name: "商品04", category: "商品类别1", price: "80", desc: "2016新款", imgsrc: "images/TB4_50x50.jpg"},
                {name: "商品05", category: "商品类别1", price: "120", desc: "2016新款", imgsrc: "images/TB1_50x50.jpg"},
                {name: "商品06", category: "商品类别1", price: "110", desc: "2016新款", imgsrc: "images/TB2_50x50.jpg"},
                {name: "商品07", category: "商品类别2", price: "55", desc: "2016新款", imgsrc: "images/TB3_50x50.jpg"},
                {name: "商品08", category: "商品类别2", price: "99", desc: "2016新款", imgsrc: "images/TB4_50x50.jpg"},
                {name: "商品09", category: "商品类别2", price: "88", desc: "2016新款", imgsrc: "images/TB1_50x50.jpg"},
                {name: "商品11", category: "商品类别3", price: "155", desc: "2016新款", imgsrc: "images/TB3_50x50.jpg"},
                {name: "商品12", category: "商品类别3", price: "255", desc: "2016新款", imgsrc: "images/TB4_50x50.jpg"},
                {name: "商品13", category: "商品类别3", price: "355", desc: "2016新款", imgsrc: "images/TB1_50x50.jpg"},
                {name: "商品14", category: "商品类别4", price: "455", desc: "2016新款", imgsrc: "images/TB2_50x50.jpg"},
                {name: "商品15", category: "商品类别4", price: "455", desc: "2016新款", imgsrc: "images/TB4_50x50.jpg"}
            ],
            shipping: {}

        };
        $scope.send = function () {
            var order = {};
            order.cart = shopCart.findAll();
            order.shipping = angular.copy($scope.data.shipping);

            var url = "order.json";
            $http.post(url, order)
                .success(function (data) {
                    console.log(123);
                    $scope.data.orderId = data.id;

                    shopCart.clear();
                })
                .error(function (err) {
                    console.log(456);
                    $scope.data.orderErr = err;

                })
                .finally(function () {
                    $location.path("/thanks")
                });
        };
    });