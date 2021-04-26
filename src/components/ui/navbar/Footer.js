import React from 'react'
import Typography from '@material-ui/core/Typography';

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


export const Footer = () => {

    return (
        <div>
            <Copyright />
        </div>
    )
}
