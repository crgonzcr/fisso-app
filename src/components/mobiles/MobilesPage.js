import React from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Toc } from '@material-ui/icons';
import { useStyles } from './mobilesPageStyle';

export const MobilesPage = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paper}>
                <Grid container spacing={2}>
                    <Paper elevation={0} item xs={12} sm container className={classes.bar}>
                        <h5><Toc /> Moviles</h5>
                    </Paper>
                    
                    <Grid item xs={12} sm container>
                        PROXIMAMENTE
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
