  
import React, { useState, useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import InputAdornment from '@material-ui/core/InputAdornment';
import { types } from '../../types/types';
import { Authcontext } from '../Auth/AuthContext'
import { useStyles } from './loginPageStyle';


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            <hr />
            {'Fisso SPA derechos reservados '}
            
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const LoginApp = ({ history }) => {

    const { dispatch } = useContext( Authcontext );
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        
        dispatch({
            type: types.login,
            payload:{
                name: 'Develop',
                email: email
            }
        });

        history.replace(lastPath);
    }     


    return (
        <form noValidate onSubmit={ handleLogin }>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6}>
                    <Grid className={classes.media}>
                        Automatizamos y optimizamos el despliegue de tus activos y personal de trabajo en terreno.
                    </Grid>
                    <img 
                        src="../../assets/background.png" 
                        style={{ width: '100%', height: '100%', objectFit:'cover' }} 
                        alt="brand" 
                    />
                </Grid>
                <Grid 
                    container 
                    item 
                    xs={12} 
                    sm={6} 
                    alignItems="center" 
                    direction="column"
                    justify="space-between"
                    style={{ padding: 10 }}
                >
                    <div />
                        
                    <div 
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            maxWidth: 400,
                            minWidth: 300
                        }}
                    >
                        <Grid container justify="center">
                            <img 
                                src="../../assets/fisso-black.png" 
                                width={ 200 }
                                alt="logo"
                            />
                        </Grid>
                        <Grid container justify="center">
                            <Typography component="h1" variant="h5">
                                Inicio de Sesión
                            </Typography>
                        </Grid>
                        <TextField
                            label="Email"
                            type="email"
                            margin="normal"
                            error
                            helperText="Este campo es requerido"
                            onInput={ ( e ) => setEmail( e.target.value )}
                            InputProps={{
                                className: classes.input,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            required
                            autoFocus
                        />
                        <TextField
                            required={true}
                            label="Password"
                            type="password"
                            margin="normal"
                            error
                            helperText="Este campo es requerido"
                            onInput={ ( e ) => setPassword( e.target.value )}
                            InputProps={{
                                className: classes.input,
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <LockRounded />
                                    </InputAdornment>
                                ),
                            }}
                            required
                        />
                        <div style={{ height: 20 }} />
                        <Button 
                            variant="contained" 
                            color="primary"
                            className={ classes.button }
                            type="submit"
                        >
                          Iniciar Sesión
                        </Button>
                    </div>
                    <div />
                    <Copyright />
                </Grid>
            </Grid>
        </form>
    )
}