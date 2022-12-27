import React from "react";

export const Tile = ({ 
  name,
  phoneNumber,
  email,
  date,
  title,
  time
}) => (
  <div className="tile-container">
    <p className="tile-title">{title}</p>
    <p className="tile">{name}</p>
    <p className="tile">{phoneNumber}</p>
    <p className="tile">{email}</p>
    <p className="tile">{date}</p>
    <p className="tile">{time}</p>
  </div>
);

