function Contact(email, {name, phone, address}) {
	this.email = email
	this.name = name ?? ""
	this.phone = phone ?? ""
	this.address = address ?? ""
}

Contact.prototype.email = function() { return this.email }

Contact.prototype.subject = function() {
	return `New contact created${this.name ? `:${this.name}` : ""}`
}

Contact.prototype.textContent = function() {
	return `A contact created with following details\n\nContact Email: ${this.email}\nName: ${this.name}\nPhone Number: ${this.phone}\nAddress: ${this.address}`
}

Contact.prototype.htmlContent = function() {
	return `<span style="padding: 2px"><b>A contact created with following details</b></span>
			<br/>
			<span style="padding: 2px">Contact Email: <i>${this.email}</i></span>
			<br/>
			<span style="padding: 2px">Name: <i>${this.name}</i></span>
			<br/>
			<span style="padding: 2px">Phone Number: <i>${this.phone}</i></span>
			<br/>
			<span style="padding: 2px">Address: <i>${this.address}</i></span>`
}

module.exports = Contact;