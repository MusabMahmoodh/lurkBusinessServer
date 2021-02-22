import nodemailer from "nodemailer";

const output = `




<!DOCTYPE html>
<html>
	
   <body>
      

    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
      <td align="center" bgcolor="#fff" >
        <img src="https://lh3.googleusercontent.com/d/1OEIGhN9cA-7qWcf5kOqJ-Qb2erZYNk10=s220?authuser=0" alt="Creating Email Magic." width="300"  style="display: block;" />
      </td>
    </tr>
    <tr>
      <td bgcolor="#ffffff" style="padding: 10px">
        <br border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
          <tr>
            <td style="color:  #153643; font-family: Arial, sans-serif;" align="center">
              <h1 style="font-size: 24px; margin: 0;">Thanks for shopping with us!</h1>
            </td>
          </tr>
          <tr>
            <td style="color: #153643; font-family: Arial, sans-serif;" align="center">
              <h5 style="font-size: 24px; margin: 0;">#Order number</h5>
            </td>
          </tr>
          <tr>
            <td  align="center" style="background-color: #e0badd; font-family: Arial, sans-serif; font-size: 16px; line-height: 14px; margin: 20px ;">
              <h5>Order status<br>Processing</h5>
             
            </td>
          </tr>
          <tr>
            <td>
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                  <td width="260" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                      
                      <tr>
                        <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 25px 0 0 0;">
                          <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                  
                   
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
    
    </tr>
  </table>
  
        </td>
      </tr>
    </table>
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

export const sendMail = () => {
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
