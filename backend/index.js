const express = require("express");
const connectToMongoDB = require("./db/dbConfig");

const route = require("./routes/CategoryRoute");

// coonect to mongodb
connectToMongoDB();

const app = express();
app.use(express.json());

app.use("/realEstate/api", route);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
