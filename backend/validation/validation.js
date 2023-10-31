const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "property name must be a string",
    "string.empty": "property name cannot be empty",
    "any.required": "property name is required",
  }),
  type: Joi.string().required().messages({
    "string.base": "type must be a string",
    "string.empty": "type cannot be empty",
    "any.required": "type is required",
  }),
  category_id: Joi.string().required().messages({
    "any.required": "category_id is required",
  }),
  country: Joi.string().required().messages({
    "string.base": "country must be a string",
    "string.empty": "country cannot be empty",
    "any.required": "country is required",
  }),
  state: Joi.string().required().messages({
    "string.base": "state must be a string",
    "string.empty": "state cannot be empty",
    "any.required": "state is required",
  }),
  city: Joi.string().required().messages({
    "string.base": "city must be a string",
    "string.empty": "city cannot be empty",
    "any.required": "city is required",
  }),
  zip_code: Joi.number().integer().required().messages({
    "number.base": "zip_code must be a number",
    "number.integer": "zip_code must be an integer",
    "any.required": "zip_code is required",
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
});

module.exports = { schema };
