import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import Notification from "../Notification/Notification";
import { contacts_list } from "./ContactList.module.css";
import { getContacts } from "../../redux/contactsSlice";
import { getFilter } from "../../redux/filterSlice";

function ContactList() {
  const contacts = useSelector(getContacts)
  const searchValue = useSelector(getFilter);

  const foundContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      {contacts.length || foundContacts.length ? (
        <ul className={contacts_list}>
          {foundContacts.map(({ id, name, number }) => (
            <li key={id}>
              <Contact
                name={name}
                number={number}
                id={id}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Notification> Your contacts list is Empty! </Notification>
      )}

      {!foundContacts.length && contacts.length > 0 && (
        <Notification> No found contacts! </Notification>
      )}
    </>
  );
}

export default ContactList;
