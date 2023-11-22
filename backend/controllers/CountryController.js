const CountrySchema = require("../models/CountrySchema");

// GET ALL COUNTRIES (GET METHOD)
exports.getCountry = async (req, res) => {
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

// CREATE NEW COUNTRY (POST METHOD)
exports.createCountry = async (req, res) => {
  try {
    const newCountry = await CountrySchema.create(req.body);
    res
      .status(201)
      .json({ message: "Country created successfully", data: newCountry });
  } catch (error) {
    // console.error(error);
    res
      .status(500)
      .json({ message: "Failed to create a country", error: error.message });
  }
}

// UPDATE COUNTRY (PUT METHOD)
exports.updateCountry = async (req, res) => {
  const countryId = parseInt(req.params.countryId);
  try {
    const updatedCountry = await CountrySchema.findByIdAndUpdate(
      countryId,
      req.body
    );
    if (updatedCountry) {
      res.json({
        message: "Country updated successfully",
        data: updatedCountry,
      });
    } else {
      res.status(404).json({ message: "Country not found." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to update Country", error: error.message });
  }
}

// DELETE COUNTRY (DELETE METHOD)
exports.deleteCountry = async (req, res) => {
  const countryId = parseInt(req.params.countryId);
  try {
    const deletedCountry = await CountrySchema.findByIdAndDelete(countryId);
    if (deletedCountry) {
      res.json({
        message: "Country deleted successfully",
        data: deletedCountry,
      });
    } else {
      res.status(404).json({ message: "Country not found." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to delete Country", error: error.message });
  }
}