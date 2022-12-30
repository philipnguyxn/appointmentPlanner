import React, { useState } from "react";
import { AppointmentForm } from "./appointmentForm/AppointmentForm.js";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  /**
   * Runs when the submit button is clicked
   * Should update title, contact, date and time created states
   * @param {Object} props including title, contact, date and time
   */
  const handleSubmit = ({ title, contact, date, time }) => {
    setTitle(title);
    setContact(contact);
    setDate(date);
    setTime(time);
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          contact={contact}
          date={date}
          time={time}
          setTitle={setTitle}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
