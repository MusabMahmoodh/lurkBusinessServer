import nodemailer from "nodemailer";

const output = `
<html>
<body>
<h1>Welcome to lurk</h1>
<p>You have new request</p>
<a href="https://lurk.lk/">
<img src='https://lurk.lk/assets/images/Lurk-Logo.png' width="100%"/>
</a>
</body>
</html>
   
`;
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "lurk.innovation@gmail.com",
    pass: "Lurk1234#",
  },
});

export const sendMail = (output) => {
  var mailOptions = {
    from: "lurk.innovation@gmail.com",
    to: "musabmah70707@gmail.com",
    subject: "Sending Email using Node.js",
    message: output,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
