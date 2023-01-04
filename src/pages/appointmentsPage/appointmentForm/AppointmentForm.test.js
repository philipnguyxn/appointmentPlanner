import React from "react"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { AppointmentForm } from "./AppointmentForm.js";

test('should display 3 input fields for title, date, and time', () => {
  render(<AppointmentForm />);

  expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Date')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
})

test('should display submit button', () => {
  render(<AppointmentForm />); 

  expect(screen.getByRole('button', {name: 'Submit'})).toBeInTheDocument();
})
