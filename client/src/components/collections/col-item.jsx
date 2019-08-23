import React from "react";
import { connect } from "react-redux";

import * as actions from "../../redux/actions";
import Button from "../form/button";
import "./collection.scss";

const ColItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button inverted onClick={() => addItem(item)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default connect(
  null,
  actions
)(ColItem);
