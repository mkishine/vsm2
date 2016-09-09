'use strict';
var GenStatRecord = require('./GenStatRecord');

// loadData converts JSON dump of VARServer gen_stat records into array of gen_stat objects
function fieldIndex(header, field) {
    var index = header.indexOf(field);
    if (index == -1 ) {
        throw new TypeError('missing "'+field+'" field in header');
    }
    return index;
}
module.exports.loadData = function(rawData) {
    // rawData is an array
    if( !Array.isArray(rawData) ) {
        throw new TypeError('rawData is not an array');
    }
    // first row is header
    if( rawData.length < 1 ) {
        throw new TypeError('rawData array is missing header record');
    }
    var header = rawData[0];
    var clientIndex = fieldIndex(header, 'client');
    var appServerIndex = fieldIndex(header, 'app_server');
    var reportTypeIndex = fieldIndex(header, 'report_type');
    var asofDateIndex = fieldIndex(header, 'asof_date');
    var reportIndex = fieldIndex(header, 'report');
    var portIndex = fieldIndex(header, 'port');
    var userIndex = fieldIndex(header, 'user');
    var hostIndex = fieldIndex(header, 'host');
    var flagsIndex = fieldIndex(header, 'flags');
    var reqTimeIndex = fieldIndex(header, 'req_time');
    var pidIndex = fieldIndex(header, 'pid');
    var reqNoIndex = fieldIndex(header, 'req_no');
    var records = [];
    for(var i = 1; i < rawData.length; ++i) {
        var rawRecord = rawData[i];
        var client = rawRecord[clientIndex];
        var appServer = rawRecord[appServerIndex];
        var reportType = rawRecord[reportTypeIndex];
        var asofDate = rawRecord[asofDateIndex];
        var report = rawRecord[reportIndex];
        var port = rawRecord[portIndex];
        var user = rawRecord[userIndex];
        var host = rawRecord[hostIndex];
        var flags = rawRecord[flagsIndex];
        var reqTime = rawRecord[reqTimeIndex];
        var pid = rawRecord[pidIndex];
        var reqNo = rawRecord[reqNoIndex];
        var gsr = new GenStatRecord(client, appServer, reportType, asofDate,
            report, port, user, host, flags, reqTime, pid, reqNo);
        records.push(gsr);
    }
    return records;
};
