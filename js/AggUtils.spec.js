'use strict';
describe('AggUtils.count function', function(){
    var data, aggUtils;
    beforeAll(function() {
        var dataLoader = require('./DataLoader');
        var rawData = require('../gen_stat_dump.BEN.20160831T0900-20160831T1000.json');
        data = dataLoader.loadData(rawData);
        aggUtils = require('./AggUtils');
    });

    it('returns empty array if input is an empty array', function(){
        var clients = aggUtils.count([], function(r){return r.client()});
        expect(clients).toEqual([]);
    });

    it('counts the number of times each key is found', function(){
        var clients = aggUtils.count(data, function(r){return r.client()});
        expect(Array.isArray(clients)).toBe(true);
        expect(clients.length).toBeGreaterThan(0);
        // make sure count times are in descending order
        var x = clients.map(function(v){return v[1];});
        x.reduce(function(prevVal, curVal){
            expect(prevVal).not.toBeLessThan(curVal);
            return curVal;
        });
    });

    it('allows counting combination of keys', function(){
        var processes = aggUtils.count(data, function(r){return JSON.stringify([r.host(), r.pid()]);});
        expect(Array.isArray(processes)).toBe(true);
        expect(processes.length).toBeGreaterThan(0);
        expect(Array.isArray(processes[0])).toBe(true);
        expect(processes[0].length).toBeGreaterThan(0);
        var host_pid = JSON.parse(processes[0][0]);
        expect(Array.isArray(host_pid)).toBe(true);
        expect(host_pid.length).toBe(2);
    });
});
