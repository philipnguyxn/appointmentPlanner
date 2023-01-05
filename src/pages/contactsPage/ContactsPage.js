import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ContactForm } from './contactForm/ContactForm.js';
import { TileList } from '../../components/tileList/TileList.js';

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  // const [name, setName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [duplicated, setDuplicated] = useState(false);

  //Check for any names' duplications
  // useEffect(() => {
  //   nameIncluded && setDuplicated(true);
  // }, [name]);

  /**
   * Runs when the submit button is clicked
   * Should update the states of name, phoneNumber and email
   * and add to contacts if the names aren't duplicated
   * @param {Object} props including the states of name, phoneNumber and email
   */
  const handleSubmit = ({ name, phoneNumber, email }) => {
    // setName(name);
    // setPhoneNumber(phoneNumber);
    // setEmail(email);
    const nameIncluded = contacts.some((contact) => contact.name === name);

    !nameIncluded
      ? addContact(name, phoneNumber, email)
      : alert('Duplicate Contact');

    // setName('');
    // setPhoneNumber('');
    // setEmail('');
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
