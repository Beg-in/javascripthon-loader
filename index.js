'use strict';

let virtualenv = require('virtualenv');

const package = require.resolve('./package');
const env = virtualenv(package);

module.exports = function (content) {
  let cb = this.async();
  let pj = env.spawn('pj', ['--inline-map', '-s', content]);
  let out = '';
  pj.stdout.on('data', data => {
    out += data;
  });
  let err = '';
  pj.stderr.on('data', data => {
    err += data;
  });
  pj.on('close', code => {
    let sourcemap;
    let i = out.lastIndexOf('//#')
    if (~i) {
      let line = out.substring(sourcemap);
      let encoded = line.substring(line.indexOf(',') + 1);
      sourcemap = JSON.parse(Buffer.from(encoded, 'base64'));
    }
    if (code === 0) {
      cb(null, out, sourcemap);
    } else {
      console.error(`javascripthon-loader exited with error status: ${code}`);
      if (err) {
        console.error(err);
      }
    }
  });
};

