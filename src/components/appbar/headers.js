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
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import TimelineOutlinedIcon from '@material-ui/icons/TimelineOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    padding: theme.spacing(1),
    zIndex: `calc(${theme.zIndex.drawer}px + 1px)`,
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
  listItem: {
    // boxShadow: theme.shadows[1],
  },
  pages: {
    marginTop: theme.spacing(10),
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
              <Grid container justify="space-between" alignItems="center">
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
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <AccountBoxOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <MenuBookOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Biograph" />
            </ListItem>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <TimelineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Timeline" />
            </ListItem>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <LanguageOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Language" />
            </ListItem>
            <ListItem button className={classes.listItem}>
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Contact Me" />
            </ListItem>
          </List>
        </Drawer>
      </div>
      <div className={classes.pages}>{children}</div>
    </React.Fragment>
  );
}

export default Headers;
