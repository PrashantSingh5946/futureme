var nodemailer = require('nodemailer');
require('dotenv').config()


async function sendMail(recipient, subject, message){
    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
          user: process.env.OUTLOOK_USER_NAME,
          pass: process.env.OUTLOOK_USER_PASSWORD
        }
      });
      
      var mailOptions = {
        from: process.env.OUTLOOK_USER_NAME,
        to: recipient,
        subject: subject,
        text: message
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return false;
        } else {
          console.log('Email sent: ' + info.response);
          return true;
        }
      });
      
}

export default sendMail;