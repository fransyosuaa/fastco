const requestIp = require('request-ip');

const logger = function (req, res, next) {
  const clientIp = requestIp.getClientIp(req);
  console.log(`Client IP address: ${clientIp}`);
  console.log(`Timestamp: ${Date.now()}`);
  next();
};

module.exports = logger;
