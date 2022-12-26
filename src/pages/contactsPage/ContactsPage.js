import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from './contactForm/ContactForm.js'
import { TileList } from '../../components/tileList/TileList.js'

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicated, setDuplicated] = useState(false);

  //Check for any names' duplications
  useEffect(() => {
    const nameIncluded = contacts.some((contact) => (
      contact.name === name
    ))

    nameIncluded && setDuplicated(true)
  })

  const handleSubmit = (data) => {
    setName(data.name);
    setPhoneNumber(data.phoneNumber);
    setEmail(data.email);

    if (!duplicated) {
      addContact(name, phoneNumber, email);
    }

    console.log(contacts)
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          onSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
