'use strict';
describe('GenStatRecord', function(){
    var GenStatRecord;
    beforeAll(function() {
        GenStatRecord = require('./GenStatRecord');
    });
    describe('constructor', function(){
        it('checks number of arguments', function(){
            expect(function() { new this.GenStatRecord(); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(1,2,3,4,5,6,7,8,9,10,11); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(1,2,3,4,5,6,7,8,9,10,11,12); }).not.toThrowError(TypeError);
        });
        it('validates arguments', function(){
            expect(function() { new GenStatRecord(1,null,3,4,5,6,7,8,9,10,11,12); }).toThrowError(TypeError);
            expect(function() { new GenStatRecord(1,undefined,3,4,5,6,7,8,9,10,11,12); }).toThrowError(TypeError);
        });
    });
    describe('has accessors for', function(){
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
            reqNo = 'reqNo',
            record;
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
