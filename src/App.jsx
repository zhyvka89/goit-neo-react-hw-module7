import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { phonebook_container, title } from "./App.module.css";

function App() {
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
