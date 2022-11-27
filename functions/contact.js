function Contact(email, {name, phone, address}) {
	this.email = email
	this.name = name ?? ""
	this.phone = phone ?? ""
	this.address = address ?? ""
}

Contact.prototype.email = function() { return this.email }

Contact.prototype.subject = function() {
	return `New contact created: ${this.name}`
}

Contact.prototype.textContent = function() {
	return `Contact Email: ${this.email}\nName: ${this.name}\nPhone Number: ${this.phone}\nAddress: ${this.address}`
}

Contact.prototype.htmlContent = function() {
	return `<div style="display:flex;flex-direction:column">
				<span style="padding: 2px">Contact Email: ${this.email}</span>
				<span style="padding: 2px">Name: ${this.name}</span>
				<span style="padding: 2px">Phone Number: ${this.phone}</span>
				<span style="padding: 2px">Address: ${this.address}</span>
			</div>
			`
}

module.exports = Contact;