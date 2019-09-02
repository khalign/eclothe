import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import Spinner from "../../components/layout/spinner";

const Previews = lazy(() => import("./previews"));
const Collection = lazy(() => import("./category"));

const Shop = props => {
  const { match, fetchCollections } = props;

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <Suspense fallback={<Spinner />}>
      <Route exact path={`${match.path}`} component={Previews} />
      <Route path={`${match.path}/:category`} component={Collection} />
    </Suspense>
  );
};

export default connect(
  null,
  actions
)(Shop);
