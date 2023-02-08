const { ObjectId } = require('mongodb');
const { Database } = require('../database/index');

const COLLECTION = 'users'

const getAll = async () => {
  const collection = await Database(COLLECTION);
  return await collection.find({}).toArray(); //Metodos de mongoDB
}

const getById = async (id) => {
  const collection = await Database(COLLECTION);
  return await collection.findOne({ _id: ObjectId(id) }); //Metodos de mongoDB
}

const create = async(product) => {
  const collection = await Database(COLLECTION);
  let result = await collection.insertOne(product) //Metodos de mongoDB
  return result.insertedId
}

// update

// delete

module.exports.UsersService = {
  getAll,
  getById,
  create,
}