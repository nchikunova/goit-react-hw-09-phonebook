import { useSelector } from 'react-redux';
import actions from '../redux/contacts/contacts-actions';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);
  const onChange = evt => dispatch(actions.filterContacts(evt.target.value));

  return (
    <Form className="mb-2">
      <Form.Group controlId="formBasicSearch">
        <Form.Control
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={value}
        onChange={onChange}
        autoComplete="off"
        />
      </Form.Group>
    </Form>
  );
}

export default Filter;