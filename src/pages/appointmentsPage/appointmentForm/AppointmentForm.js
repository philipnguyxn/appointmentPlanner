import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker.js";

export const AppointmentForm = ({
  title,
  contact,
  date,
  time,
  setTitle,
  setContact,
  setDate,
  setTime,
  handleSubmit
}) => {
  /**
   * TODO: Fix no-unused-vars error when npm start
  */

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type='date'
        min={getTodayString()}
        value={date}
        onChange={(e) => {setDate(e.target.value)}}
      />

      <input
        type='time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <ContactPicker />

      <button type="submit">Submit</button>
    </form>
  );
};
