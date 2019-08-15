import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {auth, createUser} from './firebase/firebase.utils';

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
    this.unsebscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUser(user);
        userRef.onSnapshot(snapshot => this.setState({
          user: {
            id: snapshot.id,
          ...snapshot.data()
          }}
        ));
      } else this.setState({user});
    });
  }

  componentWillUnmount() {
    this.unsebscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header user={this.state.user} />
  
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
