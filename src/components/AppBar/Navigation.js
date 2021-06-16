import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => { 
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <Nav className="mr-auto">
      <NavLink to="/" exact className="nav-link">
      Home
      </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" exact className="nav-link">
        Contacts
      </NavLink>
    )}
  </Nav>
  );
}


export default Navigation;