# javascripthon-loader
A Webpack loader that will transpile Python code into ES6 JavaScript using [JavaScripthon](https://github.com/azazel75/metapensiero.pj)

## Requirements
- Python3

## Installation
```bash
$ npm install --save-dev javascripthon-loader
$ yarn add --dev javascripthon-loader
```

## Configuration
```js
{
  test: /\.py$/,
  loader: 'javascripthon-loader', // `javascripthon` for webpack 1.x
}
```

## License
[The MIT License (MIT)](http://www.opensource.org/licenses/mit-license.html)

Copyright (c) 2017 Beg.in

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

