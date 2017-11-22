const path = require("path");
const router = require("express").Router();
const nodemailer = require('nodemailer');
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// mailer route
router.get('/mailer/:emailaddress', handleMailer, function (req, res) {
  let emailTo = req.params.emailaddress;
  res.send('Hello World!')
});

function handleMailer(req, res) {
  console.log('Sending E-mail');
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'onelistnh@gmail.com', // Your email id
      pass: 'thisisonelist' // Your password
    }
  });

  let text = 'You have a new list.';

  let mailOptions = {
    from: 'onelistnh@gmail.com', // sender address
    to: req.params.emailaddress, // list of receivers
    subject: 'Email Example', // Subject line
    //text: text, // plaintext body
    html: '<b>You have a new list</b><br><a href="http://www.google.com">www.google.com</a>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      console.log(error);
      res.json({yo: 'error'});
    }else{
      console.log('Message sent: ' + info.response);
      res.json({yo: info.response});
    };
  });
}

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
