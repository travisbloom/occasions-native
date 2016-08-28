var getbabelRelayPlugin = require('babel-relay-plugin');
var schema = require('../assets/schema.json');

module.exports = getbabelRelayPlugin(schema.data);
