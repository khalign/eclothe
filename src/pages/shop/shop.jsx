import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";

import PreviewContainer from "./previews";
import Category from "./category";

class Shop extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route exact path={`${match.path}`} component={PreviewContainer} />
        <Route path={`${match.path}/:category`} component={Category} />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Shop);
