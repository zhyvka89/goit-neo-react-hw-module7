import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import Notification from "../Notification/Notification";
import { contacts_list } from "./ContactList.module.css";
import { selectError, selectLoading, selectVisibleContacts } from "../../redux/contactsSlice";

function ContactList() {
  const foundContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectLoading);
  const isLoading = loading && foundContacts.length === 0;
  const error = useSelector(selectError);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {foundContacts.length > 0 ? (
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

      {!foundContacts.length && (
        <Notification> No found contacts! </Notification>
      )}
    </>
  );
}

export default ContactList;
