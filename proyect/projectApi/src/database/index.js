const { MongoClient } = require('mongodb');
const debug = require('debug')('app:module-database');


var connection = null;
module.exports.Database = (collection) => new Promise(async (resolve, reject) => {
  try {
    if (!connection) {
      const client = new MongoClient();
      connection = await client.connect()
      debug('Nueva Conexion realizada con mongoDB Atlas')
    }
    const db = connection.db()
    
  } catch (error) {
    
  }
})