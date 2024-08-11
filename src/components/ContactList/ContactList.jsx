import { useEffect } from "react";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts, selectError, selectFilteredContacts, selectLoading } from "../../redux/contacts/selectors";
import { deleteContactById, getContats } from "../../redux/contacts/operations";

function ContactList () {

  const contactsData = useSelector(selectContacts)
  const loadingContacts = useSelector(selectLoading)
  const errorGetContacts = useSelector(selectError)
  const filteredContacts = useSelector(selectFilteredContacts)

  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getContats());
    }, []);

  const deleteContact = (id) => {
    dispatch(deleteContactById(id));
  };

  return (
    <>
      {loadingContacts && <span>Loading ...</span>}
      {errorGetContacts && <span>Sometime wrong, please reload page</span>}
      {contactsData.length > 0 && !loadingContacts && (
        <ul className={style.contactList}>
          {filteredContacts.map((el) => (
            <li key={el.id}>
              <Contact contact={el} deleteContact={deleteContact} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ContactList;