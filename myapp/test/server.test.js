var request = require('request');
var expect = require('chai').expect;

// test suite
describe("testing server", () => { 
    it("test add function", (done) => {
        request('http://localhost:3000/add?x=10&y=20', (err, response, body) => {
            let res = body;
            expect(res).to.equal("30"); // assert
            done();
        });
    })
 
});