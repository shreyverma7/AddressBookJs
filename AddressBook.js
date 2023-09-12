// addressBook.js
class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
        console.log("Contact Added");
    }

    displayContacts() {
        this.contacts.forEach(contact => {
            console.log(`First Name: ${contact.firstName}`);
            console.log(`Last Name: ${contact.lastName}`);
            console.log(`Address: ${contact.address}`);
            console.log(`City: ${contact.city}`);
            console.log(`State: ${contact.state}`);
            console.log(`Zip Code: ${contact.zip}`);
            console.log(`Phone Number: ${contact.phoneNumber}`);
            console.log(`Email: ${contact.email}`);
            console.log("-------------"); // Separator between contacts
        });
    }
    findContactByName(firstName, lastName) {
        const foundContactIndex = this.contacts.findIndex(contact => {
            return contact.firstName === firstName && contact.lastName === lastName;
        });

        if (foundContactIndex !== -1) {
            return this.contacts[foundContactIndex];
        } else {
            return null;
        }
    }

    editContact(firstName, lastName, updatedContactInfo) {
        const foundContactIndex = this.contacts.findIndex(contact => {
            return contact.firstName === firstName && contact.lastName === lastName;
        });

        if (foundContactIndex !== -1) {
            this.contacts[foundContactIndex] = { ...this.contacts[foundContactIndex], ...updatedContactInfo };
            return true; 
        } else {
            return false; 
        }
    }
    deleteContactByName(firstName, lastName) {
        const foundContactIndex = this.contacts.findIndex(contact => {
            return contact.firstName === firstName && contact.lastName === lastName;
        });

        if (foundContactIndex !== -1) {
            // Use splice to remove the contact from the array
            this.contacts.splice(foundContactIndex, 1);
            console.log("Contact Deleted");
            return true;
        } else {
            console.log("Contact not found. Deletion failed.");
            return false;
        }
    }
    getContactCount() {
        // Use the reduce function to count the contacts in the array
        return this.contacts.reduce((count, contact) => count + 1, 0);
    }
}

module.exports = AddressBook;