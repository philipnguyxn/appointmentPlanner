import React from "react";
import { NavLink, Outlet} from "react-router-dom";

export const NavBar = () => (
  <nav>
    <NavLink to={'/'} className="active">
      Home
    </NavLink>
    <NavLink to={'/contacts'} className="active">
      Contacts
    </NavLink>
    <NavLink to={'/appointments'} className="active">
      Appointments
    </NavLink>
    <Outlet />
  </nav>
)