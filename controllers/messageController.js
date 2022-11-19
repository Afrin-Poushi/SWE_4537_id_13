var bodyparser = require("body-parser");
const fs = require("fs");
const os = require("os");
let filepath =
  "C:\\Users\\HP\\Desktop\\Code files\\server_lab\\lab5\\ExpressJS-SWE4537-W2022\\Basics\\controllers\\squeaks.txt";

const getMessage = (req, res) => {
  form = fs.readFileSync("data/form", { encoding: "utf-8" });
  form = JSON.parse(String(form));
  senderInfo = [];

  for (let key in form) {
    senderInfo.push(form[key]);
  }
  receiver = fs.readFileSync("data/Rusers", { encoding: "utf-8" });
  receiver = JSON.parse(String(receiver));
  receiverInfo = [];

  for (let key in receiver) {
    receiverInfo.push(receiver[key]);
  }
  //   console.log(
  // fs.readFile(filepath, "utf-8", (err, data) => {
  //   if (err) console.log(err);
  //   else console.log(data);
  // });
  // fs.writeFileSync(filepath, form[1]["name"]);
  //   );

  res.render("form", {
    name: "afrin",
    users: senderInfo,
    receiver: receiverInfo,
  });
};

module.exports = { getMessage: getMessage };
