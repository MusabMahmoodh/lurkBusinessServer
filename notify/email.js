import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lurk.innovation@gmail.com",
    pass: "Lurk1234#",
  },
});

export const sendMail = (to, subject, output) => {
  var mailOptions = {
    from: "lurk.innovation@gmail.com",
    to: "musabmah70707@gmail.com",
    subject: "Sending Email using Node.js",
    html: output,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
