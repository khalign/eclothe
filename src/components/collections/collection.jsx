import React from "react";
import { withRouter } from "react-router-dom";
import ColItem from "./col-item";

import "./collection.scss";

const Collection = ({ preview, title, items, route, history, match }) => (
  <div className="collection-preview">
    <h1
      className="title"
      onClick={() => history.push(`${match.path}/${route}`)}
    >
      {title}
    </h1>
    <div className="preview">
      {items
        .filter((item, i) => i < (preview ? 4 : items.length))
        .map(item => (
          <ColItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(Collection);
