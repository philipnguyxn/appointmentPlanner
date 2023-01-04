import React from "react";

export const ContactPicker = ({ contacts, setContact }) => {
  const handleChange = (e) => {
    const contact = JSON.parse(e.target.value);

    setContact({
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    });
  }

  return (
    <div className="select-wrapper">
      <select name="contact" onChange={handleChange}>
        <option id="header-option">Select a contact</option>
        {contacts?.map((contact) => (
          contact.name && (
            <option value={JSON.stringify(contact)}>{contact.name}</option>
          )
        ))}
      </select>
    </div>
  )
}
