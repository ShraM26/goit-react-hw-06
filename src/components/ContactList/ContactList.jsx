import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts) || [];
  const filter = useSelector(selectNameFilter).toLowerCase(); 
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter) 
  );

  return (
    <ul className={css.list}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <Contact key={contact.id} id={contact.id} name={contact.name} number={contact.number} />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </ul>
  );
};

export default ContactList;