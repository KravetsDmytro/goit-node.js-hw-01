import fs, { constants } from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");
const updateContactsStorage = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
// Возвращает массив контактов.
export const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

// Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
export const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
};

// Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
export const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContactsStorage(contacts);
  return result;
};

//  Возвращает объект добавленного контакта.
export const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    name,
    phone,
    email,
  };
  contacts.push(newContact);
  await updateContactsStorage(contacts);
  return newContact;
};

export default {
  
  getContactById,
  listContacts,
  removeContact,
  addContact,
};
