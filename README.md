# min-react-env

minimal browser mocks for testing react-dom code in node.js

It uses [min-document](https://github.com/raynos/min-document) with a few tiny addons, mocking _just_ enough for react-dom to be able to run. This is much smaller than using a full [JSDOM](https://github.com/jsdom/jsdom) instance or similar. If you don't do fancy DOM things in your components, min-document could well be enough.

[Install](#install) - [Usage](#usage) - [License: Apache-2.0](#license)

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/min-react-env.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/min-react-env
[travis-image]: https://img.shields.io/travis/com/goto-bus-stop/min-react-env.svg?style=flat-square
[travis-url]: https://travis-ci.com/goto-bus-stop/min-react-env
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

## Install

```
npm install min-react-env
```

## Usage

min-react-env exports `window` and `document` variables.
Assign them to the global object:

```js
import { window, document } from 'min-react-env'
import React from 'react'
import ReactDOM from 'react-dom'

global.window = window
global.document = document

// Assuming a test framework like Mocha or Jest
describe('My Tests', () => {
  const wrapper = document.createElement('main')
  ReactDOM.render(<MyComponent />, wrapper, () => {
    assert.strictEqual(
      wrapper.toString(),
      '<main><div class="MyComponent"></div></main>'
    )
  })
})
```

Now you can run your react-dom tests in Node!

If you use CommonJS (eg. you don't have a compile step), you can use this pattern:

```js
const test = require('tape')
Object.assign(global, require('min-react-env'))

test('My Tests', (t) => {
  t.plan(1)
  const wrapper = document.createElement('main')
  ReactDOM.render(<MyComponent />, wrapper, () => {
    t.strictEqual(
      wrapper.toString(),
      '<main><div class="MyComponent"></div></main>'
    )
  })
})
```

The [tests for this package](./test/index.js) actually do something very similar!

## License

[Apache-2.0](LICENSE.md)
