'use strict';
module.exports = function(client) {
    this.client = function() {
        return client;
    };
};
