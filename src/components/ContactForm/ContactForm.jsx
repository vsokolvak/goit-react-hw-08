import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { addNewContact } from "../../redux/contactsOps";

const LoginShema = Yup.object().shape({
  name: Yup.string()
    .min(3, "min 3 letters")
    .max(50, "your name to long")
    .required("this field is required"),
  number: Yup.number()
    .min(100, "min 3 numbers")
    .max(999999999, "your phone number to long")
    .required("this field is required"),
});

function ContactForm() {
  const id = nanoid();

  const dispatch = useDispatch()

  const addContact = (contact) => dispatch(addNewContact(contact));

  const onSubmitForm = ({ name, number }, { resetForm }) => {
    addContact({ name, number });
    resetForm();
  };
  return (
    <>
      <Formik
        onSubmit={onSubmitForm}
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={LoginShema}
      >
        <Form className={style.wrapper}>
          <label htmlFor={`Name${id}`} className={style.label}>
            Name
          </label>
          <span className={style.errorMessage}>
            <ErrorMessage name="name" />
          </span>
          <Field
            type="text"
            id={`Name${id}`}
            name="name"
            className={style.field}
          />

          <label htmlFor={`Number${id}`} className={style.label}>
            Number
          </label>
          <span className={style.errorMessage}>
            <ErrorMessage name="number" />
          </span>

          <Field
            type="text"
            id={`Number${id}`}
            name="number"
            className={style.field}
          />

          <button type="submit" className={style.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default ContactForm;
