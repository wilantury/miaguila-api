/**Network to manage endpoints about trips
 * @module routes/trips/network
 */
const express = require('express');
const router = express.Router();
const response = require('../../responses/response');
const ControllerTrips = require('./controller');


/**Router */
router.get('/qty_trips', getQtyTrips);

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

module.exports = router;