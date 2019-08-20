import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";

import { selectCollectionsAsArray } from "../../redux/selectors/shop";
import Collection from "../../components/collections/collection";

import Category from "./category";
import "./shop.scss";

const Previews = ({ collections }) => (
  <div className="previews">
    {collections.map(({ id, ...otherProps }) => (
      <Collection preview key={id} {...otherProps} />
    ))}
  </div>
);

const Shop = ({ collections, match }) => {
  return (
    <div>
      <Route
        exact
        path={`${match.path}`}
        render={() => <Previews collections={collections} />}
      />

      <Route path={`${match.path}/:category`} component={Category} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray
});

export default connect(mapStateToProps)(Shop);
