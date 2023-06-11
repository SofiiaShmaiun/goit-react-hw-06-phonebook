import React from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/slices';
import { getContacts } from 'redux/selectors';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      contacts.map(option => option.name).includes(evt.currentTarget.name.value)
    ) {
      alert(`${evt.currentTarget.name.value} is already in contacts`);
    } else {
      dispatch(
        addContact(evt.currentTarget.name.value, evt.currentTarget.number.value)
      );
    }
    evt.target.reset();
  };

  return (
    <div className={css.formSection}>
      <h1 className={css.formTitle}>Phonebook</h1>{' '}
      <form onSubmit={handleSubmit} className={css.inputForm}>
        <label className={css.inputNameLabel}>
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Enter contact"
            className={css.inputName}
          />
        </label>
        <label className={css.inputNumberLabel}>
          Number
          <input
            type="tel"
            name="number"
            required
            placeholder="Enter number"
            className={css.inputNumber}
          />
        </label>
        <button type="submit" className={css.submitFormButton}>
          Add contact
        </button>
      </form>
    </div>
  );
}
