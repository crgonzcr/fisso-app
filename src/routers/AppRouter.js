import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { Authcontext } from "../components/Auth/AuthContext";
import { LoginApp } from "../components/Login/LoginPage";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const { user: {logged} } = useContext(Authcontext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" isAuthenticated={ logged } component={ LoginApp } />
                    <PrivateRoute path="/" isAuthenticated={ logged } component={ DashboardRoutes } />
                </Switch>
            </div>
        </Router>
    )
}
