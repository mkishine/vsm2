'use strict';

var GenStatRecord = function(client, appServer, reportType, asofDate, report,
    port, user, host, flags, reqTime, pid, reqNo)
{
    if ( arguments.length < 12 ) {
        throw new TypeError('GenStatRecord constructor: insufficient number of arguments passed to GenStatRecord constructor');
    }
    //TODO: make sure that asof_date is a valid epoch
    //TODO: make sure that flags is a positive integer
    //TODO: make sure that req_time is a positive number
    //TODO: make sure that pid is a positive integer
    //TODO: make sure that req_no a positive integer

    if (client != null ) {
        this._client = client;
    } else {
        throw new TypeError('GenStatRecord constructor: client is null');
    }
    if ( appServer != null ) {
        this._appServer = appServer;
    } else {
        throw new TypeError('GenStatRecord constructor: appServer is null');
    }
    if ( reportType != null ) {
        this._reportType = reportType;
    } else {
        throw new TypeError('GenStatRecord constructor: reportType is null');
    }
    if ( asofDate != null ) {
        this._asofDate = asofDate;
    } else {
        throw new TypeError('GenStatRecord constructor: asofDate is null');
    }
    if ( host != null ) {
        this._host = host;
    } else {
        throw new TypeError('GenStatRecord constructor: host is null');
    }
    if ( reqTime != null ) {
        this._reqTime = reqTime;
    } else {
        throw new TypeError('GenStatRecord constructor: reqTime is null');
    }
    if ( pid != null ) {
        this._pid = pid;
    } else {
        throw new TypeError('GenStatRecord constructor: pid is null');
    }
    if ( reqNo != null ) {
        this._reqNo = reqNo;
    } else {
        throw new TypeError('GenStatRecord constructor: reqNo is null');
    }
    // these parameters have reasonble defaults
    this._report = report || '';
    this._port = port || '';
    this._user = user || '';
    this._flags = flags || '';
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