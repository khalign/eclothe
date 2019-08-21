import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUser } from "./redux/selectors/account";
import * as actions from "./redux/actions";
import { auth, createUser } from "./utils/firebase";

import "./App.css";
import Header from "./components/layout/header";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Login from "./pages/auth/login";
import Checkout from "./pages/checkout/checkout";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUser(user);
        userRef.onSnapshot(snapshot =>
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        );
      } else setUser(user);
    });

    // addCollectionWithDocs('collections', collections.map(({title, items}) => ({title, items})));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/login"
            render={() => (this.props.user ? <Redirect to="/" /> : <Login />)}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectUser
  // collections: selectCollectionsAsArray
});

export default connect(
  mapStateToProps,
  actions
)(App);
