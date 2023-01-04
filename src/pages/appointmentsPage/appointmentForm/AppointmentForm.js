import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js";

export const AppointmentForm = ({
  title,
  contact,
  contacts,
  date,
  time,
  setTitle,
  setContact,
  setDate,
  setTime,
  handleSubmit
}) => {
  /** 
  * Runs when this component is rendered
  * Should a string containing year, month, and day of from the input
  */
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type='date'
        placeholder="Date"
        min={getTodayString()}
        value={date}
        onChange={(e) => { setDate(e.target.value) }}
      />

      <input
        type='time'
        value={time}
        placeholder="Time"
        onChange={(e) => setTime(e.target.value)}
      />

      <ContactPicker contacts={contacts} setContact={setContact} />

      <button type="submit">Submit</button>
    </form>
  );
};
