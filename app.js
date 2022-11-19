const express = require("express"); //Includes the express library
const app = express(); //Creates an Express Application
const router = require("./router");
var bodyparser = require("body-parser");
const { getCV } = require("./controllers/CvController");
const os = require("os");
const { getMessage } = require("./controllers/messageController");
const port = 3000;

app.use(express.static("public"));

app.set("view engine", "ejs"); // Setting EJS as template engine

app.set("views", __dirname + "/views"); // Setting the directory for the view files

app.use(express.json());

app.use(bodyparser.urlencoded({ extended: false }));

app.use(router); // Router Middleware

// app.get("/forminput", function (req, res) {
//   res.render("form");
// });

// app.get("/message", function (req, res) {
//   res.render("message");
// });
// app.post("/message", (req, res) => {
//   console.log(req.body);
//   res.render("form");
// });

app.listen(port, function () {
  //starts up the server on a specified port ('3000')
  console.log(`Example app listening on port ${port}!`);
});
