import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ClickAwayListener,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import ComputerOutlinedIcon from '@material-ui/icons/ComputerOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    padding: theme.spacing(1),
  },
  menu: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  list: {
    padding: theme.spacing(2),
  },
  toolbar: {
    height: theme.spacing(10),
  },
  pages: {
    width: '100%',
  },
}));

function Headers({ children }) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar>
            <Grid container justify="space-around">
              <Grid
                container
                justify="space-between"
                alignItems="center"
                xs={9}
              >
                <Grid item>
                  <Typography variant="h5">Portfolio</Typography>
                </Grid>
                <Grid item>
                  <MenuIcon className={classes.menu} onClick={handleDrawer} />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Drawer
          open={drawer}
          anchor="top"
          className={classes.drawer}
          onEscapeKeyDown={() => setDrawer(false)}
          onBackdropClick={() => setDrawer(false)}
        >
          <List
            component="nav"
            className={classes.list}
            onClick={() => setDrawer(false)}
          >
            <ListItem button>
              <ListItemIcon>
                <AccountBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ComputerOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Capability" />
            </ListItem>
          </List>
        </Drawer>
      </div>
      <div className={classes.pages}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </React.Fragment>
  );
}

export default Headers;
