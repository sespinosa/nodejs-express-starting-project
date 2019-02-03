"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import http from 'http'
// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('Hello World\n')
// }).listen(1337, '127.0.0.1')
var app = (0, _express.default)();
var _process$env$PORT = process.env.PORT,
    PORT = _process$env$PORT === void 0 ? 3000 : _process$env$PORT;
app.get('/', function (req, res) {
  return res.send('Hello World\n');
});
app.listen(PORT, function () {
  return console.warn("Server started at port ".concat(PORT));
});
//# sourceMappingURL=index.js.map