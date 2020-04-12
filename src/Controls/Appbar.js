import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    color: '#fff',
    backgroundColor: '#20AF80'
  },
  toolbar: {
    minHeight: 40,
  },
  logo: {
    width: 40,
    height: 30,
    borderRadius: 20,
    marginRight: theme.spacing(2),
  },
  imgProfile: {
    width: 30,
    height: 30,
  },
  appbarHeader: {
    color: '#323b3a',
    backgroundColor: '#F2F2F2',
    boxShadow: 'none'
  },
  toolbarHeader: {
    minHeight: 50,
    paddingLeft: 200,
    paddingRight: 200,
  },
  menuList: {
    color: '#FFFFFF',
    textTransform: 'none'
  }
}));

const Appbar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <img
            className={classes.logo}
            src={
              "https://media-exp1.licdn.com/dms/image/C510BAQH418MdOx8z5g/company-logo_200_200/0?e=2159024400&v=beta&t=CWwwKH1mzXoAlOn8cIHC3NsvvXut-RQ5UI7U5hS6BxY"
            }
            alt="GIS Logo"
          />
          <div className={classes.title}>
            <Button className={classes.menuList}>Dashboard</Button>
            <Button className={classes.menuList}>Sale Managerment</Button>
            <Button className={classes.menuList}>Menu</Button>
          </div>
          {/* <Typography variant="h6" className={classes.title}>
            Photos
          </Typography> */}
          <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge color="secondary" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge overlap="circle" badgeContent=" " variant="dot">
                <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" className={classes.imgProfile} />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <AppBar position="static" color="transparent" className={classes.appbarHeader}>
        <Toolbar className={classes.toolbarHeader}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle1" className={classes.title}>
            Sale Request
          </Typography>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/">
              Home
            </Link>
            <Typography color="textPrimary">Create Sale Request</Typography>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar
