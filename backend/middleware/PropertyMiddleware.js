const { schema: validationSchema } = require("../validation/validation");

function validateRequest(req, res, next) {
  const { error } = validationSchema.validate(req.body);
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
