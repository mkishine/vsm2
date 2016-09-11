'use strict';
describe('DataLoader.loadData is a function', function(){
    var dataLoader, rawData;
    beforeAll(function() {
        dataLoader = require('./DataLoader');
        rawData = require('../gen_stat_dump.BEN.20160831T0900-20160831T1000.json');
    });
    describe('that starts with input input validation.', function(){
        describe('It makes sure that input', function(){
            it('is an array', function(){
                expect(dataLoader.loadData).toThrowError(TypeError, 'rawData is not an array');
            });
            it('is an array of nonzero length', function(){
                expect(function() { dataLoader.loadData([]) })
                    .toThrowError(TypeError, 'rawData array is missing header record');
            });
            it('first element is an array of filed names', function(){
                expect(function() { dataLoader.loadData([1]) }).toThrowError(TypeError);
                expect(function() { dataLoader.loadData([[]]) }).toThrowError(TypeError);
                expect(function() { dataLoader.loadData([['x']]) }).toThrowError(TypeError);

                var required_fields = ['client', 'app_server', 'report_type', 'asof_date', 'report',
                    'port', 'user', 'host', 'flags', 'req_time', 'pid', 'req_no' ];
                expect(function() { dataLoader.loadData([required_fields]) }).not.toThrowError(TypeError);
            });
        });
    });
    it('builds a vector of GenStatRecords', function(){
        var rawDataSlice = rawData.slice(0,2);
        var loadedData = dataLoader.loadData(rawDataSlice);
        expect(Array.isArray(loadedData)).toBe(true);
        expect(loadedData.length).toBe(1);
    });
    it('ignores exception thrown by GenStatRecord constructor', function(){
        var rawDataSlice = rawData.slice(0,2);
        rawDataSlice.push([]);
        var loadedData = dataLoader.loadData(rawDataSlice);
        expect(loadedData.length).toBe(1);
    });
});
