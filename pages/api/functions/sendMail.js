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
        html: message
      };
      
      await transporter.sendMail(mailOptions);
      
}

export default sendMail;