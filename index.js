'use strict';

let crypto = require('crypto');
let fs = require('fs');
let findCacheDir = require('find-cache-dir');
let virtualenv = require('virtualenv');

const cache = findCacheDir({
  name: 'javascripthon-loader',
  thunk: true,
  create: true,
});
const env = virtualenv(require.resolve('./package'));

module.exports = function (content) {
  let cb = this.async();
  let hash = crypto
    .createHash(this.options.output.hashFunction)
    .update(content)
    .digest(this.options.output.hashDigest)
    .substring(0, this.options.output.hashDigestLength);
  let cacheFile = cache(`${hash}.js`);

  let close = (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    if (this.sourceMap) {
      fs.readFile(`${cacheFile}.map`, 'utf8', (e, map) => cb(e, data, JSON.parse(map)));
      return;
    }
    cb(null, data);
  };

  let read = (err, code) => {
    if (err || code) {
      cb(err || `javascripthon-loader exited with error status: ${code}`);
      return;
    }
    fs.readFile(cacheFile, 'utf8', close);
  };

  if (fs.existsSync(cacheFile)) {
    read();
    return;
  }

  let pj = env.spawn('pj', [this.resourcePath, '-o', cacheFile]);
  let err = '';
  pj.stderr.on('data', data => {
    err += data;
  });
  pj.on('close', code => read(err || null, code));
};

