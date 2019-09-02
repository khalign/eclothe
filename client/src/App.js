import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectUser } from "./redux/selectors/account";
import * as actions from "./redux/actions";
import { auth, createUser } from "./utils/firebase";

import { GlobalStyle } from "./global.styles";
import Header from "./components/layout/header";
import Spinner from "./components/layout/spinner";
import ErrorBoundary from "./components/layout/error-boundary";

const Home = lazy(() => import("./pages/home/home"));
const Shop = lazy(() => import("./pages/shop/shop"));
const Login = lazy(() => import("./pages/auth/login"));
const Checkout = lazy(() => import("./pages/checkout/checkout"));

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
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
            <Route
              exact
              path="/login"
              render={() => (user ? <Redirect to="/" /> : <Login />)}
            />
          </Suspense>
        </ErrorBoundary>
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
