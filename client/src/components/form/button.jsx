import React from "react";

import { StyledButton } from "./button.styled";

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

export default Button;
