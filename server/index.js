const PORT =8080
// General imports
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const db = require("./DB");
const app = express();
const usersRouter = require("./routes/user-router");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
db.on("error", (err) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`MERN app is connected to server on server on port: ${PORT}`);
});


app.use("/users", usersRouter);

