const express = require("express");
const connectToMongoDB = require("./db/dbConfig");
const route = require("./routes/Route");
const app = express();
const cors = require('cors');

app.use(cors());
// coonect to mongodb
connectToMongoDB();

app.use(express.json({ limit: "50mb" }));
app.use("/realEstate/api", route);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
