const CountrySchema = require("../models/CountrySchema");

// GET METHOD
async function GetCountry(req, res) {
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
async function CreateCountry(req, res) {
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

// PUT METHOD
async function UpdateCountry(req, res) {
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

// DELETE METHOD
async function DeleteCountry(req, res) {
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

module.exports = {
  GetCountry,
  CreateCountry,
  UpdateCountry,
  DeleteCountry,
};
