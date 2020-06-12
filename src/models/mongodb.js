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
 * @returns {Promise} - Promise with the result.
 */
async function getCount(db, collection){
  return await client.db(db).collection(collection).find({}).count();
}

module.exports = {
  getCount,
}


