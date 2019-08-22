import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";

import PreviewContainer from "./previews";
import Category from "./category";

const Shop = props => {
  const { match, fetchCollections } = props;

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div>
      <Route exact path={`${match.path}`} component={PreviewContainer} />
      <Route path={`${match.path}/:category`} component={Category} />
    </div>
  );
};

export default connect(
  null,
  actions
)(Shop);
