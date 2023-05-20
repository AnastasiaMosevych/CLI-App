const argv = require("yargs").argv;
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
		case "list":
			const allContacts = await contacts.listContacts();
			return allContacts;
	
		case "get":
			const oneContact = await contacts.getContactById(id);
			return oneContact;
	
		case "add":
			const newContact = await contacts.addContact({ name, email, phone });
			return newContact;
	
		case "remove":
			const removedContact = await contacts.removeContact(id);
			return removedContact;
		
		default:
      		console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);
