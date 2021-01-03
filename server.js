require("dotenv").config();

const nodemailer = require("nodemailer");

//creating the transporter

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

//creating the options

let options = {
  from: "ehomeskenya@gmail.com",
  to: "joekingsleymukundi@gmail.com",
  subject: "Successfull registration",
  text: "success",
};

//sending the email
transporter.sendMail(options, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success" + data);
  }
});
