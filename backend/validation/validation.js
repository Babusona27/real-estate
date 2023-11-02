const Joi = require("joi");

const schema = Joi.object({
  property_name: Joi.string().required().messages({
    "string.base": "property name must be a string",
    "string.empty": "property name cannot be empty",
    "any.required": "property name is required",
  }),
  category_id: Joi.string().required().messages({
    "any.required": "category_id is required",
  }),
  country_id: Joi.string().required().messages({
    "string.base": "country_id must be a string",
    "string.empty": "country_id cannot be empty",
    "any.required": "country_id is required",
  }),
  state_id: Joi.string().required().messages({
    "string.base": "state_id must be a string",
    "string.empty": "state_id cannot be empty",
    "any.required": "state_id required",
  }),
  city_id: Joi.string().required().messages({
    "string.base": "city_id must be a string",
    "string.empty": "city_id cannot be empty",
    "any.required": "city_id is required",
  }),
  latitude: Joi.number().required().messages({
    "number.base": "latitude must be a number",
    "any.required": "latitude is required",
  }),
  longitude: Joi.number().required().messages({
    "number.base": "longitude must be a number",
    "any.required": "longitude is required",
  }),
  sqft: Joi.number().integer().required().messages({
    "number.base": "sqft must be a number",
    "number.integer": "sqft must be an integer",
    "any.required": "sqft is required",
  }),
  bedroom: Joi.number().integer().required().messages({
    "number.base": "bedroom must be a number",
    "number.integer": "bedroom must be an integer",
    "any.required": "bedroom is required",
  }),
  bath: Joi.number().integer().required().messages({
    "number.base": "bath must be a number",
    "number.integer": "bath must be an integer",
    "any.required": "bath is required",
  }),
  parking: Joi.boolean().required().messages({
    "boolean.base": "parking must be a boolean",
    "any.required": "parking is required",
  }),
  description: Joi.string().required().messages({
    "string.base": "description must be a string",
    "string.empty": "description cannot be empty",
    "any.required": "description is required",
  }),
  price: Joi.number().integer().required().messages({
    "string.base": "price must be a string",
    "string.empty": "price cannot be empty",
    "any.required": "price is required",
  }),
});

module.exports = { schema };
