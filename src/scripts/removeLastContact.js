import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    return await writeContacts(contacts);
  } else {
    return 'There are no contacts in database';
  }
};

removeLastContact();