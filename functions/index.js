require("dotenv").config();

const functions = require("firebase-functions");
const admin = require("firebase-admin")

admin.initializeApp();

const {
	AUTH_USER,
	AUTH_PASS	
} = process.env;

exports.sendEmailTrigger
	= functions.firestore.document("contact/{contactId}")
		.onCreate(async (snap, context) => {
			const contact = snap.data();
			console.log(AUTH_USER, AUTH_PASS)
			console.log(JSON.stringify(contact))
		}
	)