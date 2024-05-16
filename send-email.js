const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'neethurudresh.rny@gmail.com',
    pass: 'neethurudresh'
  }
});

const mailOptions = {
  from: '"Your Name" <your-email@gmail.com>',
  to: 'neethurudresh.rny@gmail.com',
  subject: 'New message from your website',
  text: `
    Name: ${name}
    Email: ${email}
    Subject: ${subject}
    Message: ${message}
  `
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error('Error:', error);
    res.json({ success: false });
  } else {
    console.log('Email sent: ' + info.response);
    res.json({ success: true });
  }
});