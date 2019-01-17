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