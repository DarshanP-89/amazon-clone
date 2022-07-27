import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from './Checkout';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { auth } from './firebase';
import useStateValue from './Stateprovider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Payment from './Payment';

const promise = loadStripe('pk_test_51LOAwAArJnNnGs7MCvCe0ds2B5aJnxr76ps3ToQSpQxrnZwsyGX8fYgWhQe7sAqBa9MwVCn7t5tWHTcDqJsYmWOF002JenHEmU');


function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])

  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route exact path='/checkout'>
              <Header />
              <Checkout />
            </Route>
            <Route exact path='/payment'>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path='/'>
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
