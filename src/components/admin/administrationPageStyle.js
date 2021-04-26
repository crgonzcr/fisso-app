import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 10,
        margin: 'auto',
        marginTop: '50px'
    },
    bar:{
        width: '100vw',
        backgroundColor:'#f1f1f1',
        margin: '0',
        padding: theme.spacing(1),
        height: '45px',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
    },
    paper: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
    },
    table:{
        width: 'auto'
    },
    filter: {
        margin: theme.spacing(-1),
        marginLeft: '5px'
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: '5px'
    },
    menuOT: {
        paddingTop: theme.spacing(2),
        margin: 'auto'
    },
}));
  

export {useStyles};