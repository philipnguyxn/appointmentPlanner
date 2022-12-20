import React from "react";
import './ContactForm.css';

export const ContactForm = ({
  name,
  phoneNumber,
  email,
  setName,
  setPhoneNumber,
  setEmail,
  handleSubmit
}) => (
  <form className="ContactForm__form" onSubmit={handleSubmit}>
    <input
      type='text'
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
    <input
      type='tel'
      placeholder="Phone Number"
      value={phoneNumber}
      pattern={/(84|0[3|5|6|7|8|9])+[0-9]{8}\b/}
      onChange={(e) => {
        try {
          setPhoneNumber(e.target.value)
        } catch (err) { }
      }}
      required
    />
    <input
      placeholder="Email"
      type='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
    <input className="ContactForm__submit" type="submit" value="Submit" />
  </form>
);
