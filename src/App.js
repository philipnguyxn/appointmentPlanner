// Node Modules
import React, { useState } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

// Components
import { NavBar } from "./components/navBar/NavBar.js";

// Pages
import { AppointmentsPage } from "./pages/appointmentsPage/AppointmentsPage.js";
import { ContactsPage } from "./pages/contactsPage/ContactsPage.js";
import { HomePage } from "./pages/homePage/HomePage.js";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  /**
   * Runs when the submit button in ContactPage is clicked
   * and there aren't any names duplications
   * Should push an object of contact to contacts state
   * @param {string} name clients' names
   * @param {string} phoneNumber client's phone number
   * @param {string} email client's email address
   */
  const addContact = (name, phoneNumber, email) => {
    const contact = {
      name,
      phoneNumber,
      email
    };

    setContacts((prev) => ([
      contact,
      ...prev
    ]))
  }

  /**
   * Runs when the submit button in AppointmentPage is clicked
   * Should push an object of appointment to appointments state
   * @param {string} title appointments' titles
   * @param {Object} contact elements from contacts
   * @param {Date} date created
   * @param {Date} time created
   */
  const addAppointment = (title, contact, date, time) => {
    const appointment = {
      title,
      contact,
      date,
      time
    };

    setAppointments((prev) => ([
      appointment,
      ...prev
    ]))
  }

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contacts' element={
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            />}
          />
          <Route path='/appointments' element={
            <AppointmentsPage
              appointments={appointments}
              addAppointment={addAppointment}
            />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
