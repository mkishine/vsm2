'use strict';
describe('GenStatRecord', function(){
    var client = 'client',
        appServer = 'appServer',
        reportType = 'reportType',
        asofDate = 'asofDate',
        report = 'report',
        port = 'port',
        user = 'user',
        host = 'host',
        flags = 'flags',
        reqTime = 'reqTime',
        pid = 'pid',
        reqNo = 'reqNo';
    var GenStatRecord;
    beforeAll(function() {
        GenStatRecord = require('./GenStatRecord');
    });
    describe('constructor', function(){
        it('checks number of arguments', function(){
            expect(function() { new this.GenStatRecord(); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, user, host, flags, reqTime, pid); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, user, host, flags, reqTime, pid, reqNo); }).not.toThrowError(TypeError);
        });
        it('validates arguments', function(){
            // client, appServer, reportType, asofDate, host, reqTime pid, and reqNo must be defined
            expect(function() { new GenStatRecord(null, appServer, reportType, asofDate, report,
                port, user, host, flags, reqTime, pid, reqNo); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, null, reportType, asofDate, report,
                port, user, host, flags, reqTime, pid, reqNo); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, null, asofDate, report,
                port, user, host, flags, reqTime, pid, reqNo); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, null, report,
                port, user, null, flags, reqTime, pid, reqNo); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, user, host, flags, null, pid, reqNo); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, user, host, flags, reqTime, null, reqNo); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, user, host, flags, reqTime, pid, null); }).toThrowError(TypeError);
            // report, port, user, and flags do not have to be defined
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, null,
                port, user, host, flags, reqTime, pid, reqNo); }).not.toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                null, user, host, flags, reqTime, pid, reqNo); }).not.toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, null, host, flags, reqTime, pid, reqNo); }).not.toThrowError(TypeError);
            expect(function() { new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, user, host, null, reqTime, pid, reqNo); }).not.toThrowError(TypeError);

        });
    });
    describe('has accessors for', function(){

        var record;
        beforeAll(function() {
            record = new GenStatRecord(client, appServer, reportType, asofDate, report,
                port, user, host, flags, reqTime, pid, reqNo);
        });
        it('client', function(){
            expect(record.client()).toBe(client);
        });
        it('appServer', function(){
            expect(record.appServer()).toBe(appServer);
        });
        it('reportType', function(){
            expect(record.reportType()).toBe(reportType);
        });
        it('asofDate', function(){
            expect(record.asofDate()).toBe(asofDate);
        });
        it('report', function(){
            expect(record.report()).toBe(report);
        });
        it('port', function(){
            expect(record.port()).toBe(port);
        });
        it('user', function(){
            expect(record.user()).toBe(user);
        });
        it('host', function(){
            expect(record.host()).toBe(host);
        });
        it('flags', function(){
            expect(record.flags()).toBe(flags);
        });
        it('reqTime', function(){
            expect(record.reqTime()).toBe(reqTime);
        });
        it('pid', function(){
            expect(record.pid()).toBe(pid);
        });
        it('reqNo', function(){
            expect(record.reqNo()).toBe(reqNo);
        });
    });
});
