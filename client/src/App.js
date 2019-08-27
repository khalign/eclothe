import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUser } from "./redux/selectors/account";
import * as actions from "./redux/actions";
import { auth, createUser } from "./utils/firebase";

import { GlobalStyle } from "./global.styles";
import Header from "./components/layout/header";

import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Login from "./pages/auth/login";
import Checkout from "./pages/checkout/checkout";

const App = props => {
  const { setUser, user } = props;

  useEffect(() => {
    let unsubscribe = null;
    unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUser(user);
        userRef.onSnapshot(snapshot =>
          setUser({ id: snapshot.id, ...snapshot.data() })
        );
      } else setUser(user);
    });

    return () => {
      console.log("unsubscribing");
      unsubscribe();
    };
  }, [setUser]);

  return (
    <div>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/login"
          render={() => (user ? <Redirect to="/" /> : <Login />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser
});

export default connect(
  mapStateToProps,
  actions
)(App);
