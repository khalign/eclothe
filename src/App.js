import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from './redux/actions';
import {auth, createUser} from './utils/firebase';

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
        userRef.onSnapshot(snapshot => this.props.setUser({
            id: snapshot.id,
          ...snapshot.data()
          }
        ));
      } else this.props.setUser(user);
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
          <Route exact path='/login' 
                  render={() => this.props.user ? <Redirect to='/' /> : <Login />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({account}) => ({
  user: account.user
})

export default connect(mapStateToProps, actions) (App);
