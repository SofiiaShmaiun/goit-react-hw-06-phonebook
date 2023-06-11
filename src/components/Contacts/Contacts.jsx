import React from 'react';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/slices';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );
};

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div className={css.contactsSection}>
      <h2 className={css.contactsTitle}>Contacts</h2>
      <ul className={css.contactsList}>
        {filteredContacts.map(contact => (
          <li key={contact.id} className={css.contactsListItem}>
            {'  '}
            {contact.name}
            {' — '}
            {contact.number}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
              className={css.deleteContactButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
