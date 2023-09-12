const Contact = require('./Contact');
const AddressBook = require('./AddressBook');

// Usage example:
const addressBook = new AddressBook();

const contact1 = new Contact("John", "Doe", "123 Main St", "New York", "Tamil", "100001", "1234567890", "john@example.com");
const contact2 = new Contact("Jane", "Smith", "456 Elm St", "Los Angeles", "Andhra", "900001", "1234567890", "jane@example.com");
const contact3 = new Contact("Shrey", "Vermas", "123 adsassvs", "Sasffls", "CAasd", "122345", "1232131232", "shrey@example.com");


addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);


addressBook.displayContacts();