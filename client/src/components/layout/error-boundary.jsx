import React from "react";

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText
} from "./layout.styled";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer
            imageUrl={
              "https://image.freepik.com/free-vector/404-error-design-with-space_23-2147739032.jpg"
            }
          />
          <ErrorImageText>Something went wrong</ErrorImageText>
        </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
