import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeContacts } from './redux/contactsSlice';

const initialContacts = [
   { id: '1', name: 'Leonardo DiCaprio', number: '555-01-23' },
  { id: '2', name: 'Angelina Jolie', number: '555-04-56' },
  { id: '3', name: 'Brad Pitt', number: '555-07-89' },
  { id: '4', name: 'Scarlett Johansson', number: '555-10-12' },
  { id: '5', name: 'Will Smith', number: '555-13-45' },
  { id: '6', name: 'Jennifer Lawrence', number: '555-16-78' },
  { id: '7', name: 'Tom Cruise', number: '555-19-01' },
  { id: '8', name: 'Emma Watson', number: '555-22-34' },
  { id: '9', name: 'Ryan Reynolds', number: '555-25-67' },
  { id: '10', name: 'Margot Robbie', number: '555-28-90' },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeContacts(initialContacts));
  }, [dispatch]);

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