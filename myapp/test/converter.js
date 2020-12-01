var converter = require('../app/converter');
var expect = require('chai').expect;

// test suite
describe("testing converter", () => { 
    it("test add function", () => {
        let res = converter.add(4,5); // Action
        expect(res).to.equal(9); // assert
    })

    it("test sub function", () => {
        let res = converter.sub(10,5);
        expect(res).to.equal(5);
    })
});