## Anagram Finder
[![NPM][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

[anagram-finder](http://github.com/cmfatih/anagram-finder) is a Node.js module for 
finding anagrams. See [Anagram](http://en.wikipedia.org/wiki/Anagram).  

### Installation

For latest release
```
npm install anagram-finder
```

For HEAD
```
git clone https://github.com/cmfatih/anagram-finder.git
```

### Usage

#### Test
```
npm test
```

#### Examples

```javascript
var anagramFinder = require('anagram-finder'),
    keywords = ['hi', 'hello', 'bye', 'helol', 'abc', 'cab', 'bac', 5, {}, []];

anagramFinder.find(keywords);
/*
[ [ 'hi' ],
  [ 'hello', 'helol' ],
  [ 'bye' ],
  [ 'abc', 'cab', 'bac' ] ]
*/
```

### Changelog

For all notable changes see [CHANGELOG.md](https://github.com/cmfatih/anagram-finder/blob/master/CHANGELOG.md)

### License

Licensed under The MIT License (MIT)  
For the full copyright and license information, please view the LICENSE.txt file.

[npm-url]: http://npmjs.org/package/anagram-finder
[npm-image]: https://badge.fury.io/js/anagram-finder.png

[travis-url]: https://travis-ci.org/cmfatih/anagram-finder
[travis-image]: https://travis-ci.org/cmfatih/anagram-finder.svg?branch=master