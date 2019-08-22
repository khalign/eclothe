import React from "react";
import { connect } from "react-redux";

import { selectCollection, selectLoaded } from "../../redux/selectors/shop";
import withSpinner from "../../components/layout/with-spinner";
import ColItem from "../../components/collections/col-item";

import "./shop.scss";

const Category = ({ collection }) => {
  const { title, items } = collection;

  return (
    <div className="category">
      <h2 className="title">{title}</h2>

      <div className="items">
        {items.map(item => (
          <ColItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.category)(state),
  loading: !selectLoaded(state)
});

export default connect(mapStateToProps)(withSpinner(Category));
