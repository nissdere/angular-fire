const mongoose = require('mongoose');
/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/env');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${env.cosmosPort}/?ssl=true`; 

//Connection String for local mongo DB
//const mongoUri = `mongodb://localhost:27017`; 

function connect() {
 mongoose.set('debug', true);
 return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
