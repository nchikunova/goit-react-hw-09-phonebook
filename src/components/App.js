import React, { useEffect, Suspense, lazy } from 'react';
import AppBar from './AppBar/AppBar';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

    return (
      <div className="Container">
      <AppBar />
      <Suspense fallback={<p>Is loading...</p>}>
        <Switch>
          <PublicRoute path="/" exact component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            exact
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            exact
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
          <Route
           path="*">
            <h2 style={{textAlign: "center", marginTop: "20px", color: "red"}}>Page not found!</h2>
          </Route>
        </Switch>
      </Suspense>
        <ToastContainer autoClose={3700} />
      </div>
    );
  }


export default App;
 
