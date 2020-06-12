/**Controller to manage store of trips endpoint
 * @module routes/trips/controller
 */
const { ObjectID } = require('mongodb');
const store = require('../../models/mongodb');

const db="miaguila";
const collection="trips";
/**
     * Logic to get the quantity of trips into "trips collection"
     * @method GET 
     * @returns {number} response - quantity of documents into "trips" collection
     */
  async function getQtyTrips(){
      return await store.getCount(db,collection);
  }
  /**
     * Logic to get the quantity of trips into "trips collection" by city
     * @method GET 
     * @param {String} req.query - the target city to count
     * @returns {number} response - quantity of documents into "trips" collection by city
     */
    async function getQtyTripsByCity(getQuery){
      const query = {city:{name:getQuery.city}};
      return await store.getCountByCity(db,collection, query);
    }
      /**
     * Logic to get a trip by id
     * @method GET 
     * @param {Object} req.params - the body of request
     * @returns {Object} response - trip
     */
    async function getTripById(params){
      const query = {_id:ObjectID(params.id)};
      return await store.getTrip(db,collection, query);
  }
    /**
     * Logic to update the status of a trip
     * @method GET 
     * @param {Object} req.body - the body of request
     * @returns {Object} response - update accomplished
     */
    async function updateStatusTrip(body){
      const query = {_id:ObjectID(body._id)};
      const newStatus = { $set: {status: body.status} };
      return await store.updateTrip(db,collection, query,newStatus);
  }


  module.exports = {
    getQtyTrips,
    getQtyTripsByCity,
    updateStatusTrip,
    getTripById,
  }