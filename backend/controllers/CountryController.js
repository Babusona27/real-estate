const CountrySchema = require("../models/CountrySchema");

// GET METHOD
async function getCountries(req, res) {
  try {
    const countries = await CountrySchema.find();

    res.status(200).json({
      status: true,
      message: "Countries fetched successfully",
      data: countries,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch countries",
      data: null,
    });
  }
}

// POST METHOD
async function createCountry(req, res) {
  const { country_name } = req.body;

  try {
    const country = new CountrySchema({ country_name });

    await country.save();

    res.status(201).json({
      status: true,
      message: "Country created successfully",
      data: country,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: err.message,
      data: null,
    });
  }
}

// PUT METHOD
async function updateCountry(req, res) {
  const { id } = req.params;
  const { country_name } = req.body;

  try {
    const country = await CountrySchema.findByIdAndUpdate(id, { country_name });

    if (!country) {
      return res
        .status(404)
        .json({ status: false, message: "Country not found", data: null });
    }

    res.status(200).json({
      status: true,
      message: "Country update successful",
      data: country,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to update country",
      data: null,
    });
  }
}

// DELETE METHOD
async function deleteCountry(req, res) {
  const { id } = req.params;

  try {
    const country = await CountrySchema.findByIdAndDelete(id);

    if (!country) {
      return res
        .status(404)
        .json({ status: false, message: "country not found" });
    }

    res.status(200).json({
      status: true,
      message: "country deleted successfully",
      data: country,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to delete country",
      data: null,
    });
  }
}

module.exports = {
  getCountries,
  createCountry,
  updateCountry,
  deleteCountry,
};
