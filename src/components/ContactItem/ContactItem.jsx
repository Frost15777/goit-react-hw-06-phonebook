import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';
import {
  ContactItems,
  ContactName,
  ContactNumber,
  Button,
} from './ContactItem.styled';

function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItems>
      <ContactName>{contact.name}</ContactName>
      <ContactNumber>{contact.number}</ContactNumber>
      <Button onClick={handleDelete}>
        Delete
      </Button>
    </ContactItems>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;