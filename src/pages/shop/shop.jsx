import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";

import * as actions from "../../redux/actions";
import {
  selectCollectionsAsArray,
  selectLoaded
} from "../../redux/selectors/shop";
import Collection from "../../components/collections/collection";
import withSpinner from "../../components/layout/with-spinner";

import Category from "./category";
import "./shop.scss";

const Previews = ({ collections }) => (
  <div className="previews">
    {collections.map(({ id, ...otherProps }) => (
      <Collection preview key={id} {...otherProps} />
    ))}
  </div>
);

const PreviewsWithSpinner = withSpinner(Previews);
const CategoryWithSpinner = withSpinner(Category);

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { collections, match, loaded } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <PreviewsWithSpinner loading={!loaded} collections={collections} />
          )}
        />

        <Route
          path={`${match.path}/:category`}
          render={props => <CategoryWithSpinner loading={!loaded} {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray,
  loaded: selectLoaded
});

export default connect(
  mapStateToProps,
  actions
)(Shop);
