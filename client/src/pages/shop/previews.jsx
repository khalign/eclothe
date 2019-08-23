import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCollectionsAsArray,
  selectFetching
} from "../../redux/selectors/shop";

import withSpinner from "../../components/layout/with-spinner";
import Collection from "../../components/collections/collection";
import "./shop.scss";

const Previews = ({ collections }) => (
  <div className="previews">
    {collections.map(({ id, ...otherProps }) => (
      <Collection preview key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray,
  loading: selectFetching
});

export default compose(
  connect(mapStateToProps),
  withSpinner
)(Previews);
