import React from 'react'
import { Home } from '../components/home/HomePage'
import { Navbar } from '../components/ui/navbar/NavBar'
import { EditOTPage } from '../components/ot/EditOTPage'
import { OTPage } from '../components/ot/OTPage'
import { MobilesPage } from '../components/mobiles/MobilesPage'
import { ActivesPage } from '../components/actives/ActivesPage'
import { AdministrationPage } from '../components/admin/AdministrationPage'
import { MapPage } from '../components/map/MapPage'
import { Switch, Route, Redirect } from "react-router-dom";
import { Footer } from '../components/ui/navbar/Footer'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    body:{
        minHeight: '85vh'
    },
    footer: {
        padding: theme.spacing(3)
    }
}));

export const DashboardRoutes = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar/>

            <div className={classes.body}>
                <Switch>
                    <Route exact path="/home" component={ Home } />
                    <Route exact path="/ots" component={ OTPage } />
                    <Route exact path="/ot/edit/:otId" component={ EditOTPage } />
                    <Route exact path="/ot/create" component={ EditOTPage } />
                    <Route exact path="/mobiles" component={ MobilesPage } />
                    <Route exact path="/actives" component={ ActivesPage } />
                    <Route exact path="/admin" component={ AdministrationPage } />
                    <Route exact path="/map" component={ MapPage } />

                    <Redirect to="/home"/>
                </Switch>
            </div>

            <div className={classes.footer}>
                <Footer />
            </div>

        </>
    )
}
