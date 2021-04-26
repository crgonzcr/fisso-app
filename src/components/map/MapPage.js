import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Map } from '@material-ui/icons';
import { useStyles } from './mapPageStyle';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function GMap() {
    return (
        <GoogleMap 
            defaultZoom={ 10 } 
            defaultCenter={{ lat: -38.736212, lng: -72.593656 }} 
        />
    );
}

const WrappeedMap = withScriptjs(withGoogleMap(GMap));

export const MapPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paper}>
                <Grid container spacing={2}>
                    <Paper elevation={0} item xs={12} sm container className={classes.bar}>
                        <h5><Map /> Mapa</h5>
                    </Paper>
                    
                    <Grid item xs={10} sm container>
                        <div className={classes.map}>
                            <WrappeedMap 
                                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&Kkey=AIzaSyAzNzhfIHSxmUq5fRI4zDNCbYbTGnNKyp0`} 
                                loadingElement={<div style={{ height: "100%"}} />}
                                containerElement={<div style={{ height: "100%"}} />}
                                mapElement={<div style={{ height: "100%"}} />}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={2} sm container>
                        OT Seleccionada:
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
