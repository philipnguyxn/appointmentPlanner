import React from "react"
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { ContactPicker } from "./ContactPicker.js";

test('should correctly set default option', () => {
  render(<ContactPicker />)

  expect(screen.getByRole('option', {
    name: 'Select a contact'
  }).selected).toBe(true)
})

test('should allow user to change contact', () => {
  render(<ContactPicker />)
  const user = userEvent.setup()

  user.selectOptions(
    // Find the select element, like a real user would.
    screen.getByRole('combobox'),

    // Find and select the any option, like a real user would.
    screen.getByRole('option', { name: /[\w\s]+/ }),
  )

  expect(screen.getByRole('option', {
    name: /[\w\s]+/
  }).selected).toBe(true)
})
