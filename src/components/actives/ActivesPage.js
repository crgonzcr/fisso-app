import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Toc } from '@material-ui/icons';
import { useStyles } from './activesPageStyle';

export const ActivesPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paper}>
                <Grid container spacing={2}>
                    <Paper elevation={0} item xs={12} sm container className={classes.bar}>
                        <h5><Toc /> Activos</h5>
                    </Paper>
                    
                    <Grid item xs={12} sm container>
                        PROXIMAMENTE
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
