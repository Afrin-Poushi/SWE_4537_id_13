var bodyparser = require("body-parser");
const fs = require("fs");
const os = require("os");
const readline = require("readline");
let filepath =
  "C:\\Users\\HP\\Desktop\\Code files\\server_lab\\lab5\\ExpressJS-SWE4537-W2022\\Basics\\controllers\\squeaks.txt";

const showMessage = (req, res) => {
  const info = JSON.stringify({
    sender: req.body.sender,
    receiver: req.body.receiver,
    message: req.body.message,
  });

  fs.appendFileSync(filepath, info + "\n");

  form = fs.readFileSync("data/form", { encoding: "utf-8" });
  form = JSON.parse(String(form));
  senderInfo = [];

  for (let key in form) {
    senderInfo.push(form[key]);
  }
  receiver = fs.readFileSync("data/Rusers", { encoding: "utf-8" });
  receiver = JSON.parse(String(receiver));
  var receiverInfo = [];

  for (let key in receiver) {
    receiverInfo.push(receiver[key]);
  }
  //   const msg = fs.readFileSync(filepath, "utf-8");
  //   const newmsg = msg.replace("{", "[{").replace(/}$/, "}]");
  //   console.log(JSON.parse("[" + newmsg + "]"));
  //msgjson = JSON.parse(msg);

  var messages = [];
  var allmsg = [];
  var thisSender = [];
  var thisReceiver = [];
  var thisMsgs = [];
  let sender = req.body.sender;
  let receiverS = req.body.receiver;

  const msg = readline.createInterface({
    input: fs.createReadStream(filepath),
  });
  msg.on("line", (line) => {
    mn = JSON.parse(String(line));
    // bn = JSON.stringify(JSON.parse(line));
    messages.push(mn);

    // for (let key in mn) {
    //   messages.push(mn[key]);
    // }
  });
  msg.on("close", function (d) {
    messages.forEach((e) => allmsg.push(e));

    //Filtering Sender Messages
    for (let key in allmsg) {
      if (sender == allmsg[key]["sender"]) thisSender.push(allmsg[key]);
    }
    //Filtering selected receiver messages
    for (let key in thisSender) {
      if (receiverS == thisSender[key]["receiver"])
        thisMsgs.push(thisSender[key]["message"]);
    }
    console.log(thisMsgs);
    res.render("msg", {
      users: senderInfo,
      receiver: receiverInfo,
      msgInfo: thisMsgs,
      thisSender: sender,
      thisReceiver: receiverS,
    });
  });

  // res.render("msg", {
  //   users: senderInfo,
  //   receiver: receiverInfo,
  //   //   msgInfo: messages,
  // });
  //   res.redirect("/message");
};

module.exports = { showMessage: showMessage };
