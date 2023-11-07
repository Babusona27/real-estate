
const { schema: validationSchema } = require("../validation/validation"); // Note the change in object destructuring

function validateRequest(req, res, next) {
  const { error } = validationSchema.validate(req.body, {
    allowUnknown: true, // This option allows unknown fields (e.g., 'images_arr')
  });
  if (error) {
    const errorMessage = error.details
      .map((detail) => detail.message)
      .join(", ");
    res.status(400).json({
      status: false,
      message: `Validation failed: ${errorMessage}`,
      data: null,
    });
  } else {
    next();
  }
}

module.exports = { validateRequest };
