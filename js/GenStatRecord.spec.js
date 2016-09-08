'use strict';
describe('GenStatRecord', function(){
    beforeAll(function() {
        this.GenStatRecord = require('./GenStatRecord');
    });

    it('has client accessor', function(){
        var client = 'x';
        var record = new this.GenStatRecord(client);
        expect(record.client()).toBe(client);

    });
});
