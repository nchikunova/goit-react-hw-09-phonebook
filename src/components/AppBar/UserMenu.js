import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const onLogout = useCallback(
    () => {
      dispatch(authOperations.logOut());
    },
    [dispatch],
  );
  return (
  <div>
    <Navbar.Text className="mr-3">Welcome, {name} </Navbar.Text>
    <Button variant="outline-info" type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
  );
};


export default UserMenu;