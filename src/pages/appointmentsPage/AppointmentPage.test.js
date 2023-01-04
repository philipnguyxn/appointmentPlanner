import React from "react"
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import { AppointmentsPage } from "./AppointmentsPage.js";

test('should display 2 level 2 heading', () => {
  render(<AppointmentsPage />);
  
  expect(screen.getByRole('heading', {
    level: 2,
    name: 'Add Appointment'
  })).toBeInTheDocument()
  expect(screen.getByRole('heading', {
    level: 2,
    name: 'Appointments'
  })).toBeInTheDocument()
})