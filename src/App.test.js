import React from "react";
import { render, screen } from "@testing-library/react";

import App from "./App.js";

describe("App", () => {
  it('renders App components', () => {
    render(<App />);

    expect(screen.getByText(/Home Page/i).toBeInTheDocument())

    screen.debug();
  })
})