import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

export const PublicRoute = ({ isAuthenticated, component: Comment, ...rest }) => {

    return (
        <Route
            component={ (props) => (
                (!isAuthenticated) ? <Comment { ...props } /> : (<Redirect to="/" />)
            )}
        />
    )
}


PublicRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}