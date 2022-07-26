import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Checkout } from './Checkout';
import React, { useEffect, useState } from 'react';
import Login from './Login';
import { auth } from './firebase';
import useStateValue from './Stateprovider';
import Payment from './Payment';


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
              <Payment />
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
