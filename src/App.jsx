import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';

const App = () => {

  return (
    <>
    <div className="addContact">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <SearchBox />
    </div>
      <ContactList />
      </>
  );
};

export default App;