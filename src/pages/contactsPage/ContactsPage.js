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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(duplicated)

    !duplicated && addContact(name, phoneNumber, email)

    setName('')
    setPhoneNumber('')
    setEmail('')
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phoneNumber={phoneNumber}
          email={email}

          setName={setName}
          setPhoneNumber={setPhoneNumber}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
          contacts={contacts}
        />
      </section>
    </div>
  );
};
