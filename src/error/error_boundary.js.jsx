import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children } = this.props;

    return !hasError ? children : (
      <div style={{ whiteSpace: 'pre' }}>
        <h2>Something went wrong</h2>
        {error.toString()}
        <p>
          <span>Error occured</span>
          {errorInfo.componentStack}
        </p>
      </div>
    );
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
