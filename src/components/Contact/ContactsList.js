import React, {useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import Filter from '../Filter';
import ListGroup from 'react-bootstrap/ListGroup';


const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  const onDeleteContact = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);


    return (
    <>
      <Filter/>
        <ListGroup>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
      ))}
        </ListGroup>
    </>
    );
  }

export default ContactsList;