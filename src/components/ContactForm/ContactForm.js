import React, { useCallback, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';


function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const handleNameChange = useCallback(evt => {
    const { value } = evt.currentTarget;
    setName(value);
  }, []);

  const handleNumberChange = useCallback(evt => {
    const { value } = evt.currentTarget;
    setNumber(value);
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      toast.info(`${name} is already in contacts`);
    } 
    else {
        dispatch(contactsOperations.addContact(name, number));
    }
      
   reset();
  };
  
  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
       <Form   onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Name</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            placeholder="Annie Copeland"
            value={name}
            onChange={handleNameChange}
          />
           </InputGroup>
          <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Phone</InputGroup.Text>
          </InputGroup.Prepend>       
          <Form.Control
            type="text"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            placeholder="111-11-11"
            value={number}
            onChange={handleNumberChange}
          />
        </InputGroup>
        <Button
          variant="outline-info"
          type="submit"
          disabled={name === '' || number === ''}
        >
          Save contact
        </Button>
      </Form>
    );
  }


export default ContactForm;
