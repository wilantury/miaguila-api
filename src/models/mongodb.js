/** 
 *Module for create/read/update/delete information of a data base NoSQL MONGO. 
 *@module MONGODB
*/

const { MongoClient } = require('mongodb');
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
 * @param {String} - query: the cityTarget to search into database
 * @param {String} - db: database target
 * @param {String} - collection: collection target
 * @returns {Promise} - Promise with the result.
 */
async function getCountByCity(db, collection, query){
  return await client.db(db).collection(collection).find(query).count();
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


/**
 * Get the a trip by id.
 * @param {Object} - body with id
 * @returns {Promise} - Promise with the result.
 */
function getTrip(db, collection, query){
  return new Promise( (resolve, reject) => {
    client.db(db).collection(collection).find(query).toArray((err, res) => {
      if(err){
        return reject(err);
      }
       resolve(res);
    });
  })
}
/**
 * Update a trip of collection.
 * @param {Object} - query
 * @param {Object} - new values
 * @param {String} - db: database target
 * @param {String} - collection: collection target
 * @returns {Promise} - Promise with the result.
 */
async function updateTrip(db, collection, query, newValues){
  return await client.db(db).collection(collection).updateOne(query, newValues);
}

module.exports = {
  getCount,
  getCountByCity,
  updateTrip,
  getTrip,
}


