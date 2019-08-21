import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route } from "react-router-dom";
import { firestore, mapCollectionsSnapshot } from "../../utils/firebase";

import * as actions from "../../redux/actions";
import { selectCollectionsAsArray } from "../../redux/selectors/shop";
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
  state = {
    loading: true
  };
  unsubscribe = null;

  componentDidMount() {
    const ref = firestore.collection("collections");

    ref.onSnapshot(async snapshot => {
      const collections = mapCollectionsSnapshot(snapshot);
      this.props.setCollections(collections);
      this.setState({ loading: false });
    });
  }

  render() {
    const { collections, match } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <PreviewsWithSpinner loading={loading} collections={collections} />
          )}
        />

        <Route
          path={`${match.path}/:category`}
          render={props => (
            <CategoryWithSpinner loading={this.state.loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsAsArray
});

export default connect(
  mapStateToProps,
  actions
)(Shop);
