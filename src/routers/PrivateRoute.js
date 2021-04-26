import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

export const PrivateRoute = ({ isAuthenticated, component: Comment, ...rest }) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route
            component={ (props) => (
                (isAuthenticated) ? <Comment { ...props } /> : (<Redirect to="/login" />)
            )}
        />
    )
}


PrivateRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}