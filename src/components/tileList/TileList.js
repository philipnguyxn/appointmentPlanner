import React from "react";
import { Tile } from "../tile/Tile.js"

export const TileList = ({ contacts, appointments }) => {
  if (contacts) {
    return contacts.map((contact) => (
      <Tile
        key={contact.name}
        name={contact.name}
        phoneNumber={contact.phoneNumber}
        email={contact.email} />
    ))
  } else {
    return appointments.map((appointment) => (
      <Tile

      />
    ))
  }
};
