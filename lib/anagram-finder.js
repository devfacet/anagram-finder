/*
 * Anagram Finder
 * Copyright (c) 2014 Fatih Cetinkaya (http://github.com/cmfatih/anagram-finder)
 * For the full copyright and license information, please view the LICENSE.txt file.
 */

/* jslint node: true */
'use strict';

// Init the module
exports = module.exports = function() {

  // Finds the anagrams by the given keywords
  var find = function find(keywords) {

    if(!keywords || !(keywords instanceof Array))
      return false;

    var result       = [],
        keywordsLen  = keywords.length,
        keywordsSort = function(a, b) { return a > b; };

    // Find
    var keywordsGrp = {},
        keywordKey,
        i;

    for(i = 0; i < keywordsLen; i++) {
      if(typeof keywords[i] !== 'string')
        continue;

      keywordKey = keywords[i].split('').sort(keywordsSort).join('');

      if(!keywordsGrp.hasOwnProperty(keywordKey))
        keywordsGrp[keywordKey] = [];

      keywordsGrp[keywordKey].push(keywords[i]);
    }

    var keyword;
    for(keyword in keywordsGrp) {
      if(keywordsGrp.hasOwnProperty(keyword))
        result.push(keywordsGrp[keyword]);
    }

    return result;
  };

  // Return
  return {
    find: find
  };
}();