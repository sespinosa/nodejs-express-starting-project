import http from 'http';
import { expect } from 'chai';

import '../src/index.js';

const { PORT = 3000 } = process.env

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get(`http://127.0.0.1:${PORT}`, res => {
      expect(res.statusCode).to.be.equal(200);
      done();
    });
  });
  it('should return Hello World', done => {
    http.get(`http://127.0.0.1:${PORT}`, res => {
      let body = ""
      res.on('data', chunk => {
        body += chunk;
      })
      res.on('end', () => {
        expect(body.trim()).to.be.equal("Hello World");
        done();
      })
    })
  });
});