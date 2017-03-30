/**
 * Created by hxsd on 2016/12/15.
 */
angular.module("filterModule",[]);
angular.module("cartModule",[]);
angular.module("myapp",["filterModule","cartModule","ngRoute","ngMessages"]);
angular.module("myapp").config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl:"views/productsList.html",controller:"productListCtrl"})
        .when("/checkout",{templateUrl:"views/checkoutSummary.html",controller:"checkoutCtrl"})
        .when("/order",{templateUrl:"views/placeOrder.html"})
        .when("/thanks",{templateUrl:"views/thankYou.html"})
        .otherwise("/",{templateUrl:"views/productsList.html",controller:"productListCtrl"})
});