import React from "react";
import PropTypes from 'prop-types';

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

Tile.propTypes = {
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  time: PropTypes.string
}

