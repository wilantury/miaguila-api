const joi = require('@hapi/joi');

const mongoIdSchema = joi.object({
  id: joi.string().min(24).required().regex(/^[0-9a-fA-F]{24}$/)
});

const getTripsSchema = joi.object({
  page: joi.string().required(),
  per_page: joi.string().required(),
  sort_date: joi.string().min(3).max(4),
  city: joi.string().max(20)
});

const getSizeTripsCity = joi.object({
  city: joi.string().required().max(20)
})

const updateStatusSchema = joi.object({
  _id: joi.string().min(24).required().regex(/^[0-9a-fA-F]{24}$/),
  status: joi.string().required().min(4).max(7)
})

const updateDrvLocSchema = joi.object({
  _id: joi.string().min(24).required().regex(/^[0-9a-fA-F]{24}$/),
  type: joi.string().max(10),
  long: joi.string().required().max(14),
  lat: joi.string().required().max(14)
})

module.exports = {
  mongoIdSchema,
  getTripsSchema,
  getSizeTripsCity,
  updateStatusSchema,
  updateDrvLocSchema
}