import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { types } from '../../../types/types';
import { Authcontext } from '../../Auth/AuthContext'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { useStyles } from './navBarStyle';


export const Navbar = () => {
    
    const { user: {name}, dispatch } = useContext(Authcontext);

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
    }

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogout}>
                <ExitToApp
                // aria-label="account of current user"
                // aria-controls="primary-search-account-menu"
                // aria-haspopup="true"
                color="inherit"
                >
                <AccountCircle />
                </ExitToApp>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
        <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            <ExitToApp />
            </IconButton>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuItem>
        </Menu>
    );

  return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography className={classes.title} variant="h6" noWrap>
                        <Link 
                            className="navbar-brand" 
                            to="/"
                        >
                            <img 
                                src="../../assets/fisso-white-navbar.png" 
                                style={{ width: '90px', objectFit:'cover' }} 
                                alt="brand" 
                            />
                        </Link>
                    </Typography>
                    <Typography>
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/home"
                            style={{color: 'white'}}
                        >
                            Inicio
                        </NavLink>
                    </Typography>
                    <Typography>
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/ots"
                            style={{color: 'white'}}

                        >
                            OT
                        </NavLink>
                    </Typography>
                    <Typography>
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/mobiles"
                            style={{color: 'white'}}

                        >
                            Moviles
                        </NavLink>
                    </Typography>
                    <Typography>
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/actives"
                            style={{color: 'white'}}

                        >
                            Activos
                        </NavLink>
                    </Typography>
                    <Typography>
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/admin"
                            style={{color: 'white'}}

                        >
                            Administracion
                        </NavLink>
                    </Typography>
                    <Typography>
                        <NavLink 
                            activeClassName="active"
                            className="nav-link" 
                            exact
                            to="/map"
                            style={{color: 'white'}}

                        >
                            Mapa
                        </NavLink>
                    </Typography>
                    
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <Typography>
                                <span className="nav-link">
                                    <AccountCircle /> { name }
                                </span>
                            </Typography>
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                        <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
