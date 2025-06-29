const serverless = require('serverless-http');
const server = require('../../server');

// Create serverless function for express to work in Netlify production builds
const netlifyHandler = serverless(server)

module.exports.handler = netlifyHandler;