/**Network to manage endpoints about trips
 * @module routes/trips/network
 */
const express = require('express');
const router = express.Router();
const response = require('../../responses/response');
const ControllerTrips = require('./controller');


/**Router */
router.get('/qty_trips', getQtyTrips);
router.get('/qty_trips/city', getQtyTripsByCity);

/**
 * API Endpoint to get how many trips are into collection "trips" of db.
 * @method GET 
 * @returns {Object} - body
 */
async function getQtyTrips(req, res, next){
  try{
      const resGetQtyTrips = await ControllerTrips.getQtyTrips();
      response.success(req, res, {quantity:resGetQtyTrips}, 200);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network getting QTY of trips');
  }
}

/**
 * API Endpoint to get how many trips have been taken by city
 * @method GET 
 * @param {Object} req - the request object
 * @returns {Object} - body
 */
async function getQtyTripsByCity(req, res, next){
  try{
      const resGetQtyTripsByCity = await ControllerTrips.getQtyTripsByCity(req);
      response.success(req, res, {quantity:resGetQtyTripsByCity}, 200);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network getting QTY of trips by city');
  }
}

module.exports = router;