const CitySchema = require("../models/CitySchema");

// GET METHOD
async function getCities(req, res) {
  try {
    const cities = await CitySchema.aggregate([
      // Aggregation code here
      {
        $lookup: {
          from: "states",
          localField: "state_id",
          foreignField: "_id",
          as: "state_details",
        },
      },
    ]);
    res.json({
      status: true,
      message: "cities fetched successfully",
      data: cities,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch cities",
      data: null,
    });
  }
}

// POST METHOD
async function createCity(req, res) {
  const { city_name, state_id } = req.body;

  try {
    const city = new CitySchema({ city_name, state_id });

    await city.save();

    res.status(201).json({
      status: true,
      message: "city created successfully",
      data: city,
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
async function updateCity(req, res) {
  const { id } = req.params;
  const { city_name, state_id } = req.body;

  try {
    const city = await CitySchema.findByIdAndUpdate(id, {
      city_name,
      state_id,
    });

    if (!city) {
      return res
        .status(404)
        .json({ status: false, message: "city not found", data: null });
    }

    res.status(200).json({
      status: true,
      message: "city update successful",
      data: city,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to update city",
      data: null,
    });
  }
}

// DELETE METHOD
async function deleteCity(req, res) {
  const { id } = req.params;

  try {
    const city = await CitySchema.findByIdAndDelete(id);

    if (!city) {
      return res.status(404).json({ status: false, message: "city not found" });
    }

    res.status(200).json({
      status: true,
      message: "city deleted successfully",
      data: city,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to delete city",
      data: null,
    });
  }
}

module.exports = {
  getCities,
  createCity,
  updateCity,
  deleteCity,
};
