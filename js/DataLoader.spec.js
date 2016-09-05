'use strict';
describe('DataLoader.loadData is a function', function(){
    beforeAll(function() {
        this.dataLoader = require('./DataLoader');
        this.rawData = require('../gen_stat_dump.BEN.20160831T0900-20160831T1000.json').slice(0,2);
    });
    describe('that starts with input input validation.', function(){
        describe('It makes sure that input', function(){
            it('is an array', function(){
                expect(this.dataLoader.loadData).toThrowError(TypeError, 'rawData is not an array');
            });
            it('is an array of nonzero length', function(){
                var that = this;
                expect(function() { that.dataLoader.loadData([]) })
                    .toThrowError(TypeError, 'rawData array is missing header record');
            });
        });
    });
    it('does something', function(){
        var loadedData = this.dataLoader.loadData(this.rawData);
        expect(Array.isArray(loadedData)).toBe(true);
        expect(loadedData.length).toBe(1);
    });
});
