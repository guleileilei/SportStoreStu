/**
 * Created by hxsd on 2016/12/15.
 */
angular.module("filterModule")
    .filter("pageFilter", function () {
        return function (products, pageNum, pageSize) {
            if (angular.isArray(products) && angular.isNumber(pageNum) && angular.isNumber(pageSize)) {

                var startIndex = (pageNum - 1) * pageSize;
                if (startIndex > products.length) {
                    return [];
                }
                var newArr = products.slice(startIndex, startIndex + pageSize);
                return newArr;


            } else {
                return products;
            }
        }
    })
    .filter("navFilter", function () {
        return function (products, pageSize) {
            var page = Math.ceil(products.length / pageSize);

            var navButtons = [];
            for (var i = 0; i < page; i++) {
                navButtons.push(i + 1);
            }
            return navButtons;
        }
    });