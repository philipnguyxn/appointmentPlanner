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
      <NavBar />
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
