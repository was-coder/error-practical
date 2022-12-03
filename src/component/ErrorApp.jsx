import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, hasError: null };
  }

  componentDidCatch(error, hasError) {
    this.setState({
      error: error,
      hasError: hasError,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container error-boundary">
          <h2>Something went wrong.</h2>
          <h3>Note: Bug is bugging you... check details below</h3>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.hasError.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
