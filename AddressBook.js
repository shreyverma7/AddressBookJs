// addressBook.js
class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    // Check for duplicates based on first and last name
    const isDuplicate = this.contacts.some((existingContact) => {
      return (
        existingContact.firstName === contact.firstName &&
        existingContact.lastName === contact.lastName
      );
    });

    if (isDuplicate) {
      console.log("Duplicate entry. Contact not added.");
    } else {
      this.contacts.push(contact);
      console.log("Contact Added");
    }
  }

  displayContacts() {
    this.contacts.forEach((contact) => {
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
    const foundContactIndex = this.contacts.findIndex((contact) => {
      return contact.firstName === firstName && contact.lastName === lastName;
    });

    if (foundContactIndex !== -1) {
      return this.contacts[foundContactIndex];
    } else {
      return null;
    }
  }

  editContact(firstName, lastName, updatedContactInfo) {
    const foundContactIndex = this.contacts.findIndex((contact) => {
      return contact.firstName === firstName && contact.lastName === lastName;
    });

    if (foundContactIndex !== -1) {
      this.contacts[foundContactIndex] = {
        ...this.contacts[foundContactIndex],
        ...updatedContactInfo,
      };
      return true;
    } else {
      return false;
    }
  }
  deleteContactByName(firstName, lastName) {
    const foundContactIndex = this.contacts.findIndex((contact) => {
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
  // Method to search for contacts by city and display them
  findAndDisplayContactsByCity(city) {
    const filteredContacts = this.contacts.filter(
      (contact) => contact.city === city
    );

    if (filteredContacts.length === 0) {
      console.log(`No contacts found in ${city}`);
    } else {
      console.log(`Contacts in ${city}:`);
      filteredContacts.forEach((contact) => {
        this.displayContact(contact);
      });
    }
  }

  // Method to search for contacts by state and display them
  findAndDisplayContactsByState(state) {
    const filteredContacts = this.contacts.filter(
      (contact) => contact.state === state
    );

    if (filteredContacts.length === 0) {
      console.log(`No contacts found in ${state}`);
    } else {
      console.log(`Contacts in ${state}:`);
      filteredContacts.forEach((contact) => {
        this.displayContact(contact);
      });
    }
  }
  // Helper method to display contact information
  displayContact(contact) {
    console.log(`First Name: ${contact.firstName}`);
    console.log(`Last Name: ${contact.lastName}`);
    console.log(`Address: ${contact.address}`);
    console.log(`City: ${contact.city}`);
    console.log(`State: ${contact.state}`);
    console.log(`Zip Code: ${contact.zip}`);
    console.log(`Phone Number: ${contact.phoneNumber}`);
    console.log(`Email: ${contact.email}`);
    console.log("-------------"); // Separator between contacts
  }
  // Method to search for contacts by city
  findContactsByCity(city) {
    return this.contacts.filter((contact) => contact.city === city);
  }

  // Method to search for contacts by state
  findContactsByState(state) {
    return this.contacts.filter((contact) => contact.state === state);
  }

  // Method to view persons by city and return an array of matching contacts
  viewPersonsByCity(city) {
    return this.contacts.filter((contact) => contact.city === city);
  }

  // Method to view persons by state and return an array of matching contacts
  viewPersonsByState(state) {
    return this.contacts.filter((contact) => contact.state === state);
  }
  getCountByCity(city) {
    const count = this.contacts.reduce((total, contact) => {
      if (contact.city === city) {
        return total + 1;
      }
      return total;
    }, 0);

    return count;
  }

  // Method to get the count of contact persons in a specific state
  getCountByState(state) {
    const count = this.contacts.reduce((total, contact) => {
      if (contact.state === state) {
        return total + 1;
      }
      return total;
    }, 0);

    return count;
  }
}
module.exports = AddressBook;
