import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contactsSlice";
import { ImPhone } from "react-icons/im";
import { ImUser } from "react-icons/im";

import { contact_card, icon, button } from "./Contact.module.css";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  function handleDeleteContact(id) {
    dispatch(deleteContact(id));
  }
  
  return (
    <div className={contact_card}>
      <div>
        <p>
          <ImUser className={icon} />
          {name}
        </p>
        <p>
          <ImPhone className={icon} />
          {number}
        </p>
      </div>
      <div>
        <button
          className={button}
          type="button"
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
