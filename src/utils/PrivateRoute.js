import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './../img/Spinner';

const PrivateRoute = ({
  component: Component,
  auth: { isLoggedIn, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      loading ? (
        <Spinner />
      ) : isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);