/**Network to manage endpoints about trips
 * @module routes/trips/network
 */
const express = require('express');
const router = express.Router();
const response = require('../../responses/response');
const ControllerTrips = require('./controller');
const validationHandler = require('../../../utils/middlewares/validationHandler');
const { mongoIdSchema, getTripsSchema, getSizeTripsCity,
        updateStatusSchema, updateDrvLocSchema
      } = require('../../../utils/schemas/trips');

/**Router */
router.get('/qty_trips', getQtyTrips);
router.get('/qty_trips/city', 
        validationHandler(getSizeTripsCity,'query'),
        getQtyTripsByCity);
router.get('/:id', 
        validationHandler(mongoIdSchema,'params'),
        getTripById);
router.get('/', 
        validationHandler(getTripsSchema,'query'),
        getTripsPagination);
router.put('/status', 
        validationHandler(updateStatusSchema),
        updateStatusTrip);
router.put('/drv_loc', 
        validationHandler(updateDrvLocSchema),
        updateDrvLocTrip);
router.post('/', createTrip);

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
      const resGetQtyTripsByCity = await ControllerTrips.getQtyTripsByCity(req.query);
      response.success(req, res, {quantity:resGetQtyTripsByCity}, 200);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network getting QTY of trips by city');
  }
}

/**
 * API Endpoint to get one trip by id
 * @method GET 
 * @param {Object} req - the request object
 * @returns {Object} - body
 */
async function getTripById(req, res, next){
  try{
      const resGetTripById = await ControllerTrips.getTripById(req.params);
      response.success(req, res,resGetTripById, 200);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network getting trip by Id');
  }
}

/**
 * API Endpoint to get all trips using pagination, receive params to sort it
 * @method GET 
 * @param {Object} req - the request object
 * @returns {Object} - body
 */
async function getTripsPagination(req, res, next){
  try{
      const resGetTrips = await ControllerTrips.getTrips(req.query);
      response.success(req, res,resGetTrips, 200);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network getting QTY of trips by city');
  }
}

/**
 * API Endpoint to update the status of a trip
 * @method PUT 
 * @param {Object} req - the request object
 * @returns {Object} - body
 */
async function updateStatusTrip(req, res, next){  
  try{
      const resUpdateTrip = await ControllerTrips.updateStatusTrip(req.body);
      response.success(req, res, resUpdateTrip, 201);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network updating status trip');
  }
}
/**
 * API Endpoint to update the location of a trip
 * @method PUT 
 * @param {Object} req - the request object
 * @returns {Object} - body
 */
async function updateDrvLocTrip(req, res, next){  
  try{
      const resUpdateDrvLocTrip = await ControllerTrips.updateDrvLocTrip(req.body);
      response.success(req, res, resUpdateDrvLocTrip, 201);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network updating driver location trip');
  }
}

/**
 * API Endpoint to create a trip
 * @method POST 
 * @param {Object} req - the request object
 * @returns {Object} - body
 */
async function createTrip(req, res, next){  
  try{
      const resCreateTrip = await ControllerTrips.createTrip(req.body);
      response.success(req, res, {id:resCreateTrip}, 201);
  }catch(err){
      response.error(req, res, err.message, 500, 'error network updating trip');
  }
}
module.exports = router;