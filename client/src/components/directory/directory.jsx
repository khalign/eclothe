import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectSections } from "../../redux/selectors/shop";
import MenuItem from "./menu-item";

import "./directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherProps }) => (
      <MenuItem key={id} {...otherProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
