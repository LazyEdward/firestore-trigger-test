const nodemailer = require("nodemailer");

function EmailService(senderServiceProvider, senderEmail, senderPassword) {
	this.sender = senderEmail
	this.transporter = nodemailer.createTransport({
		service: senderServiceProvider,
		auth: {
			user: senderEmail,
			pass: senderPassword
		}
   });
}

EmailService.prototype.sendEmail = async function(receiverEmail, subject, textContent, htmlContent) {
	return await this.transporter.sendMail({
		from: this.sender,
		to: receiverEmail,
		subject,
		text: textContent,
		html: htmlContent
	})
}

module.exports = EmailService