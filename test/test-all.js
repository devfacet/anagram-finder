// Init reqs
/* jslint node: true */
/* global describe: false */
/* global it: false */
'use strict';

var anagramFinder = require('../'),
    expect        = require('chai').expect;

// Tests

// Test for anagram-finder module
describe('anagram-finder', function() {

  // Test for find
  describe('find()', function() {
    var keywords = ['hi', 'hello', 'bye', 'helol', 'abc', 'cab', 'bac', 5, {}, []];

    it('should find keywords', function(done) {
      var findKeywords = anagramFinder.find(keywords);
      expect(findKeywords).to.be.a('array');
      expect(findKeywords).to.have.property('length').to.be.equal(4);
      expect(findKeywords).to.deep.equal([['hi'], ['hello', 'helol'], ['bye'], ['abc', 'cab', 'bac']]);
      done();
    });

    it('should fail to find keywords (missing keywords)', function(done) {
      var findKeywords = anagramFinder.find();
      expect(findKeywords).to.be.equal(false);
      done();
    });
  });
});