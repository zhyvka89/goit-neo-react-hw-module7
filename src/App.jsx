import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { phonebook_container, title } from "./App.module.css";
import { getContacts } from "./redux/contactsOps";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts())
  }
  , [dispatch]);

  return (
    <div className={phonebook_container}>
      <h1 className={title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />  
    </div>
  );
}

export default App;
