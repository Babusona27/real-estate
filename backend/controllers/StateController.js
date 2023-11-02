const StateSchema = require("../models/StateSchema");

// GET METHOD
async function getStates(req, res) {
  try {
    const states = await StateSchema.aggregate([
      // Aggregation code here
      {
        $lookup: {
          from: "countries",
          localField: "country_id",
          foreignField: "_id",
          as: "country_details",
        },
      },
    ]);
    res.json({
      status: true,
      message: "states fetched successfully",
      data: states,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Failed to fetch states",
      data: null,
    });
  }
}

// POST METHOD
async function createState(req, res) {
  const { state_name, country_id } = req.body;

  try {
    const state = new StateSchema({ state_name, country_id });

    await state.save();

    res.status(201).json({
      status: true,
      message: "state created successfully",
      data: state,
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
async function updateState(req, res) {
  const { id } = req.params;
  const { state_name, country_id } = req.body;

  try {
    const state = await StateSchema.findByIdAndUpdate(id, {
      state_name,
      country_id,
    });

    if (!state) {
      return res
        .status(404)
        .json({ status: false, message: "state not found", data: null });
    }

    res.status(200).json({
      status: true,
      message: "state update successful",
      data: state,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to update state",
      data: null,
    });
  }
}

// DELETE METHOD
async function deleteState(req, res) {
  const { id } = req.params;

  try {
    const state = await StateSchema.findByIdAndDelete(id);

    if (!state) {
      return res
        .status(404)
        .json({ status: false, message: "state not found" });
    }

    res.status(200).json({
      status: true,
      message: "state deleted successfully",
      data: state,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Failed to delete state",
      data: null,
    });
  }
}

module.exports = {
  getStates,
  createState,
  updateState,
  deleteState,
};
