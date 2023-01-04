import React from "react";
import { Tile } from "../tile/Tile.js";
import PropTypes from 'prop-types';

export const TileList = ({ contacts, appointments }) => {
  /** 
  * Render a list of contact and appointment objects using Tile components
  * with the key of each Tile is either the contact's names or the appointment's titles
  * TODO: Change if else with looping between props to render contacts and appointments Tile components
  */
  if (contacts) {
    return contacts?.map((contact) => (
      <Tile
        key={contact.id}
        name={contact.name}
        phoneNumber={contact.phoneNumber}
        email={contact.email} />
    ))
  } else {
    return appointments?.map((appointment) => (
      <Tile
        key={appointment.id}
        title={appointment.title}
        name={appointment.contact.name}
        phoneNumber={appointment.contact.phoneNumber}
        email={appointment.contact.email}
        date={appointment.date}
        time={appointment.time}
      />
    ))
  }
};

TileList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired
    })
  ),
  appointments: PropTypes.arrayOf(PropTypes.object)
}