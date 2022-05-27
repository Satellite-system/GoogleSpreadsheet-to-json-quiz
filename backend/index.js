var express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

const app = express();
const port = 5000 || process.env.PORT;
connectToMongo();

app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

//required routes
app.use("/", require("./routes/home"));

app.listen(port, () => {
  console.log(`visit at: https:\\\localhost:${port}`);
});
