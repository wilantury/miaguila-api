/**Controller to manage store of trips endpoint
 * @module routes/trips/controller
 */
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
     * @param {Object} req.body - city: The target city to count its trips.
     * @returns {number} response - quantity of documents into "trips" collection by city
     */
    async function getQtyTripsByCity(body){
      return await store.getCountByCity(db,collection, body.query.city);
  }


  module.exports = {
    getQtyTrips,
    getQtyTripsByCity,
  }