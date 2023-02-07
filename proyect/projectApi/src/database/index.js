const { MongoClient } = require('mongodb');
const debug = require('debug')('app:module-database');

const { Config: { mongoDbname, mongoUri } } = require('../config/index');

var connection = null;
module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
  try {
    if (!connection) {
      const client = new MongoClient(mongoUri);
      connection = await client.connect()
      debug('Nueva Conexion realizada con mongoDB Atlas')
    }
    debug('Reutilizando connection')
    const db = connection.db(mongoDbname)
    resolve(db.collection(collection))
  } catch (error) {
    reject(error)
  }
})