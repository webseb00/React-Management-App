import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import PersonIcon from '@material-ui/icons/Person';
import { Link as RouterLink } from 'react-router-dom';

export default function MenuBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Button
          startIcon={<HomeIcon />}
          color="inherit"
          component={RouterLink}
          to="/"
        >
          Dashboard
        </Button>
        <Button
          startIcon={<AllInboxIcon />}
          color="inherit"
          component={RouterLink}
          to="/projects"
        >
          Projects
        </Button>
        <Button
          startIcon={<PersonIcon />}
          color="inherit"
          component={RouterLink}
          to="/employees"
        >
          Employees
        </Button>
      </Toolbar>
    </ AppBar>
  )
}