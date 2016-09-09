'use strict';
var _ = require('lodash');

var GenStatRecord = function(client, appServer, reportType, asofDate, report,
    port, user, host, flags, reqTime, pid, reqNo)
{
    if ( arguments.length < 12 ) {
        throw new TypeError('GenStatRecord constructor: insufficient number of arguments passed to GenStatRecord constructor');
    }
    if ( !_.every(arguments, function(a) {return a != null;}) ) {
        throw new TypeError('GenStatRecord constructor: all arguments have to be defined ');
    }
    //TODO: make sure that asof_date is a valid epoch
    //TODO: make sure that flags is a positive integer
    //TODO: make sure that req_time is a positive number
    //TODO: make sure that pid is a positive integer
    //TODO: make sure that req_no a positive integer
    this._client = client;
    this._appServer = appServer;
    this._reportType = reportType;
    this._asofDate = asofDate;
    this._report = report;
    this._port = port;
    this._user = user;
    this._host = host;
    this._flags = flags;
    this._reqTime = reqTime;
    this._pid = pid;
    this._reqNo = reqNo;
};


GenStatRecord.prototype.client = function() {
    return this._client;
};

GenStatRecord.prototype.appServer = function() {
    return this._appServer;
};

GenStatRecord.prototype.reportType = function() {
    return this._reportType;
};

GenStatRecord.prototype.asofDate = function() {
    return this._asofDate;
};

GenStatRecord.prototype.report = function() {
    return this._report;
};

GenStatRecord.prototype.port = function() {
    return this._port;
};

GenStatRecord.prototype.user = function() {
    return this._user;
};

GenStatRecord.prototype.host = function() {
    return this._host;
};

GenStatRecord.prototype.flags = function() {
    return this._flags;
};

GenStatRecord.prototype.client = function() {
    return this._client;
};

GenStatRecord.prototype.reqTime = function() {
    return this._reqTime;
};

GenStatRecord.prototype.pid = function() {
    return this._pid;
};

GenStatRecord.prototype.reqNo = function() {
    return this._reqNo;
};

module.exports = GenStatRecord;