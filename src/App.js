import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';

import './App.css';
import Header from './components/layout/header';

import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import Login from './pages/auth/login';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  unsebscribeFromAuth = null;

  componentDidMount () {
    this.unsebscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({user});
      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsebscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
  
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
