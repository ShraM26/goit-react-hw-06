
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import css from './ContactForm.module.css';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .matches(/^[A-Za-zА-Яа-яЁё\s\-]+$/, 'Only letters are allowed')
    .min(3, 'Too Short! Min 3')
    .max(50, 'Too Long! Max 50'),
  number: Yup.string()
    .required('Required')
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .min(3, 'Too Short! Min 3')
    .max(15, 'Too Long! Max 15'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.Form}>
          <div className={css.cntInp}>
            <label className={css.text} htmlFor="name">Name</label>
            <Field className={css.input}
              type="text"
              id="name"
              name="name"
              placeholder="Monica Bellucci"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.cntInp}>
            <label className={css.text} htmlFor="number">Number</label>
            <Field className={css.input}
              type="text"
              id="number"
              name="number"
              placeholder="999-99-99"
            />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <button className={css.addBtn} type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;