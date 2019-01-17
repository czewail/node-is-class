
[![npm](https://img.shields.io/npm/v/node-is-class.svg)](https://www.npmjs.com/package/node-is-class)
[![npm](https://img.shields.io/npm/dm/node-is-class.svg)](https://www.npmjs.com/package/node-is-class)
[![npm](https://travis-ci.org/czewail/node-is-class.svg?branch=master)](https://www.npmjs.com/package/node-is-class)
[![GitHub license](https://img.shields.io/github/license/czewail/node-is-class.svg)](https://github.com/czewail/node-is-class/blob/master/LICENSE)

# node-is-class
Check if function is an ES6 class

> Does not use toString, use Reflect.ownKeys to check it

> Function.prototype.toString does not work with Proxy well

# Install
```bash
$ npm install --save node-is-class
```

# Usage
```js
const isClass = require('node-is-class')

console.log(isClass(class {}))
console.log(isClass(function() {}))

```

# Test
```bash
$ npm test
```

# License
MIT