import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./layout.styled";

const withSpinner = Component => props =>
  props.loading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Component {...props} />
  );

export default withSpinner;
