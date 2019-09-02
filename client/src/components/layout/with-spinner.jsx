import React from "react";
import Spinner from "./spinner";

const withSpinner = Component => props =>
  props.loading ? <Spinner /> : <Component {...props} />;
export default withSpinner;
