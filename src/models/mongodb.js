/** 
 *Module for create/read/update/delete information of a data base NoSQL MONGO. 
 *@module MONGODB
*/

const {MongoClient} = require('mongodb');
const config = require('../config/index');
/**
 * Fetch the environment variables to connect to a data base Mongo.
 */
const uri = config.uri_mongo;

const client = new MongoClient(uri);
/**
 * Handle the connection to a database Mongo.
 */
async function connectMongo(){
  try {
    await client.connect();
    console.log("DB connected")
  } catch (error) {
    console.error(e);
    throw e;
  }
}
connectMongo();

/**
 * Get the quantity of documents into a collection.
 * @param {String} - city: the cityTarget to search into database
 * @param {String} - db: database target
 * @param {String} - collection: collection target
 * @returns {Promise} - Promise with the result.
 */
async function getCountByCity(db, collection, cityTarget){
  return await client.db(db).collection(collection).find({city:{name:cityTarget}}).count();
}

/**
 * Get the quantity of documents by key into a collection.
 * @param {String} - db: database target
 * @param {String} - collection: collection target
 * @returns {Promise} - Promise with the result.
 */
async function getCount(db, collection){
  return await client.db(db).collection(collection).find({}).count();
}

module.exports = {
  getCount,
  getCountByCity,
}


