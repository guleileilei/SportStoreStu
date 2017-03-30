/**
 * Created by hxsd on 2016/12/16.
 */
angular.module("cartModule")
    .factory("shopCart", function () {
        var cart = [];
        return {
            add: function (product) {

                for (var i = 0; i < cart.length; i++) {
                    var item = cart[i];
                    if (item.product.name == product.name) {
                        item.number++;
                        return;
                    }
                }
                cart.push({product: product, number: 1});
            },
            remove: function (name) {
                for (var i = 0; i < cart.length; i++) {
                    var item = cart[i];
                    if (item.product.name == name) {
                        cart.splice(item, 1);
                        break;
                    }
                }
            },
            findAll: function () {
                return cart;
            },
            clear: function () {
                cart.length = 0;
            }
        };
    })
    .controller("cartCtrl", function ($scope, shopCart) {
        var cart = shopCart.findAll();
        $scope.count = function () {
            var total = 0;
            angular.forEach(cart, function (item) {
                total += item.number;
            });
            return total;
        };
        $scope.money = function () {
            var total = 0;
            angular.forEach(cart, function (item) {
                total += item.number * item.product.price;

            });
            return total;
        };
    });