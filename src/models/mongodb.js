/** 
 *Module for create/read/update/delete information of a data base NoSQL MONGO. 
 *@module MONGODB
*/

const { MongoClient } = require('mongodb');
const config = require('../config/index');
/**
 * Fetch the environment variables to connect to a data base Mongo.
 */
let uri;
if(config.env === 'development'){
  uri = config.uri_mongo;
}else{
  uri = config.uri_mongo_atlas;
}

const client = new MongoClient(uri);
/**
 * Handle the connection to a database Mongo.
 */
async function connectMongo(){
  try {
    await client.connect();
    console.log("DB connected")
  } catch (error) {
    console.error("DB has not been connected yet, please check the database credentials.")
    return new Error("Throubles to connect to Mongo");
  }
}
connectMongo();

/**
 * Get the quantity of documents into a collection.
 * @param {Object} - query: the cityTarget to search into database
 * @param {String} - db: database target
 * @param {String} - collection: collection target
 * @returns {Promise} - Promise with the result.
 */
async function getCountByCity(db, collection, query){
  return await client.db(db).collection(collection).find(query).count();
}

/**
 * Get all trips with pagination.
 * @param {Object} - query: filters and/or sort?
 * @param {String} - page: what page do you want to load? it must start with "0" for first page
 * @param {String} - per_page: how many items per page
 * @param {String} - db: database target
 * @param {String} - collection: collection target
 * @returns {Promise} - Promise with the result.
 */
async function getTrips(db, collection, query, page, per_page, sortQuery){
  return await client.db(db).collection(collection).find(query)
  .sort(sortQuery).skip(page > 0 ? (page*per_page) : 0)
  .limit(parseInt(per_page)).toArray()
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
async function getTrip(db, collection, query){
  return await client.db(db).collection(collection).find(query).toArray()
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

/**
 * Create a new trip.
 * @param {Object} - Values
 * @param {String} - db: database target
 * @param {String} - collection: collection target
 * @returns {Promise} - Promise with the result.
 */
async function insertTrip(db, collection, data){
  return await client.db(db).collection(collection).insertOne(data);
}
module.exports = {
  getCount,
  getCountByCity,
  updateTrip,
  getTrip,
  insertTrip,
  getTrips
}


