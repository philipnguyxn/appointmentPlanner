import React from "react";

export const ContactPicker = ({ contacts, setContact }) => (
  <div className="select-wrapper">
    <select name="contact" onChange={(e) => setContact(e.target.value)}>
      <option id="header-option">Select a contact</option>
      {contacts?.map((contact) => (
        contact.name && (
          <option value={contact.name}>{contact.name}</option>
        )
      ))}
    </select>
  </div>
)
