const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

// Usage example:
const addressBook = new AddressBook();

const contact1 = new Contact("John", "Doe", "123 Main St", "New York", "Tamil", "100001", "1234567890", "john@example.com");
const contact2 = new Contact("Jane", "Smith", "456 Elm St", "Los Angeles", "Andhra", "900001", "1234567890", "jane@example.com");
const contact3 = new Contact("Shrey", "Vermas", "123 adsassvs", "Sasffls", "CAasd", "122345", "1232131232", "shrey@example.com");
const contact4 = new Contact("Shrey", "Vermas", "123 adsassvs", "Sasffls", "CAasd", "122345", "1232131232", "shrey@example.com");

//Adding contact
addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);

//Display
addressBook.displayContacts();
//search contact
const foundContact = addressBook.findContactByName("Shrey", "Vermas");

if (foundContact) {
    // update contact
    const updatedInfo = {
        address: "789 Elm St",
        city: "Chicago",
        state: "ILqwerty",
        zip: "600601",
        phoneNumber: "1234567890",
        email: "updated.email@example.com",
    };
    const success = addressBook.editContact("Shrey", "Vermas", updatedInfo);
    if (success) {
        console.log("Contact updated successfully!");
    } else {
        console.log("Contact not found.");
    }
}
else {
    console.log("Contact not found.");
}
addressBook.displayContacts();
//delete contact
addressBook.deleteContactByName("Jane", "Smith");
console.log("=========Final display=============");
addressBook.displayContacts();
//Count
const contactCount = addressBook.getContactCount();
console.log(`Number of Contacts: ${contactCount}`);
//Duplicate
addressBook.addContact(contact4);
//Search through City and State
addressBook.findAndDisplayContactsByCity('New York');
addressBook.findAndDisplayContactsByState('CA');


