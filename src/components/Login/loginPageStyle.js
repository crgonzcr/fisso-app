import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
    //   src: {"../../assets/background.png"},
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    button: {
        marginTop: '10px',
        width: '80%',
        backgroundColor: '#00c2cb',
        color: '#fff',
        borderRadius: '20px',
        padding: '7px 0',
        marginLeft: '10%',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#00BAEC',
            borderColor: '#00BAEC'
        },
        '&:active': {
          backgroundColor: '#00BAEC',
          borderColor: '#00BAEC',
        }
    },
    media: {
        "@media (max-width: 599px)": {
            position: 'absolute',
            color: '#ffffff',
            fontSize: '5vw',
            widthMin: '100%',
            padding: '0 5rem',
            lineHeight: '2rem',
            top: '15%',
            right: '0%',
            textAlign: 'center',
            "@media (max-width: 280px)": {
                top: '5%',
            }
        },
        "@media (min-width: 600px)": {
            position: 'absolute',
            color: '#ffffff',
            fontSize: '1.8rem',
            widthMin: '50%',
            padding: '0 5rem',
            lineHeight: '4rem',
            top: '30%',
            right: '50%',
            textAlign: 'center'
        }
    }
}));
