const Email = require('email-templates')
require('dotenv').config()

const sender = async (from, to, subject, data) => {
    const email = new Email({
        message: {
          from: from,
          subject: subject,
        },
        // uncomment below to send emails in development/test env:
        send: true,
        transport: {
        	host: "smtp.gmail.com",
        	port: 587,
        	secure: false, // true for 465, false for other ports
        	auth: {
              user: process.env.MAIL_USER, // generated ethereal user
              pass: process.env.MAIL_PASS // generated ethereal password
        	}
    	}
    })

    email
    .send({
      template: 'registration',
      message: {
        to: to
      },
      locals: data
    })
    .then(console.log)
    .catch(console.error)
}

module.exports = sender
