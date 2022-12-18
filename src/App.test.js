import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import App from "./App.js";

test('full app rendering/navigating', async () => {
  render(<App />, { wrapper: BrowserRouter })
  const user = userEvent.setup()

  // verify page content for default route
  expect(screen.getByText(/Home Page/)).toBeInTheDocument()

  // verify page content for expected route after navigating
  await user.click(screen.getByRole('link', { name: 'Contacts' }))
  expect(screen.getByRole('heading', {
    level: 2,
    name: 'Add Contact'
  })).toBeInTheDocument()
  expect(screen.getByRole('heading', {
    level: 2,
    name: 'Contacts'
  })).toBeInTheDocument()

  await user.click(screen.getByRole('link', { name: 'Appointments' }))
  expect(screen.getByRole('heading', {
    level: 2,
    name: 'Add Appointment'
  })).toBeInTheDocument()
  expect(screen.getByRole('heading', {
    level: 2,
    name: 'Appointments'
  })).toBeInTheDocument()
})