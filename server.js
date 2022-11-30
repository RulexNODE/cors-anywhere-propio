// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || "localhost";
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require("cors-anywhere");
cors_proxy
  .createServer({
  checkRateLimit: checkRateLimit,
  removeHeaders: ['cookie', 'cookie2'],
  redirectSameOrigin: true,
  httpProxyOptions: {xfwd: false},
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
