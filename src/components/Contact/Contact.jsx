import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import css from './Contact.module.css';
import { FiUser, FiPhone } from "react-icons/fi";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.itemCnt}>
      <p className={css.text}><FiUser className={css.iconU} /> {name}</p>
      <p className={css.text}><FiPhone className={css.iconP} /> {number}</p>
      <button className={css.btnDelete} type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;