'use strict';
// loadData converts JSON dump of VARServer gen_stat records into array of gen_stat objects
module.exports.loadData = function(rawData) {
    // rawData is an array
    if( !Array.isArray(rawData) ) {
        throw new TypeError('rawData is not an array');
    }
    // first row is header
    if( rawData.length < 2 ) {
        throw new TypeError('rawData array is missing header record');
    }
    //TODO: parse raw data
    return rawData.slice(1);
};
