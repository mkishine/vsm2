'use strict';
var _ = require('lodash');

module.exports.count = function (data, keyGen) {
    return _(data.reduce(
        function (acc, r) {
            var key = keyGen(r);
            if (!acc[key]) {
                acc[key] = 1;
            } else {
                ++acc[key];
            }
            return acc;
        }, {}))
        .toPairs()
        .sortBy(function (v) {
            return -v[1];
        })
        .value();
};