const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const EmailService = require("./email");
const Contact = require("./contact");

const {
	SERVICE,
	AUTH_USER,
	AUTH_PASS	
} = process.env;

const emailService = new EmailService(SERVICE, AUTH_USER, AUTH_PASS)

admin.initializeApp();

exports.sendEmailTrigger
	= functions.firestore.document("contact/{contactId}")
		.onCreate(async (snap, context) => {
			const data = snap.data();
			console.log(SERVICE, AUTH_USER, AUTH_PASS)
			console.log(JSON.stringify(data))

			if(!data.email){
				console.log("invaild contact")
				return;
			}

			let {email, ...contactDetails} = data;

			const contact = new Contact(email, contactDetails)
			let res = await emailService.sendEmail(contact.email, contact.subject(), contact.textContent(), contact.htmlContent())

			console.log(res)
		}
	)