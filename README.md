## Anagram Finder

[![NPM][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Anagram Finder is a module for finding anagrams. See [wiki page](http://en.wikipedia.org/wiki/Anagram)
for more details.

### Installation

```
npm install anagram-finder
```

### Usage

```javascript
var anagramFinder = require('anagram-finder'),
    keywords      = ['hi', 'hello', 'bye', 'helol', 'abc', 'cab', 'bac', 5, {}, []];

anagramFinder.find(keywords);
/*
[ [ 'hi' ],
  [ 'hello', 'helol' ],
  [ 'bye' ],
  [ 'abc', 'cab', 'bac' ] ]
*/
```

### License

Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.

[npm-url]: http://npmjs.org/package/anagram-finder
[npm-image]: https://badge.fury.io/js/anagram-finder.svg

[travis-url]: https://travis-ci.org/devfacet/anagram-finder
[travis-image]: https://travis-ci.org/devfacet/anagram-finder.svg?branch=master
