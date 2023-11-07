const Joi = require("joi");

const schema = Joi.object({
  property_name: Joi.string().required().messages({
    "string.base": "property name must be a string",
    "string.empty": "property name cannot be empty",
    "any.required": "property name is required",
  }),
  type: Joi.string().required().messages({
    "string.base": "type name must be a string",
    "string.empty": "type name cannot be empty",
    "any.required": "type name is required",
  }),
  category: Joi.string().required().messages({
    "string.base": "category name must be a string",
    "string.empty": "category name cannot be empty",
    "any.required": "category name is required",
  }),
  country: Joi.string().required().messages({
    "string.base": "country name must be a string",
    "string.empty": "country name cannot be empty",
    "any.required": "country name is required",
  }),
  state: Joi.string().required().messages({
    "string.base": "state name must be a string",
    "string.empty": "state name cannot be empty",
    "any.required": "state name required",
  }),
  city: Joi.string().required().messages({
    "string.base": "city name must be a string",
    "string.empty": "city name cannot be empty",
    "any.required": "city name is required",
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
  // images_arr: Joi.string(),
});

module.exports = { schema };
