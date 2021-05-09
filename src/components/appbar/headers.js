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
import { InboxOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  list: {
    // backgroundColor: '#4dabf5',
  },
  listItem: {
    // backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1),
  },
}));

function Headers(children) {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);
  // const theme = useTheme();
  // const media = useMediaQuery(theme.breakpoints.down('md'));
  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary" className={classes.root}>
        <Toolbar>
          <Grid container justify="space-around">
            <Grid container justify="space-between" alignItems="center" xs={9}>
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
              <InboxOutlined />
            </ListItemIcon>
            <ListItemText
              primary="Trash"
              secondary="apaan coba"
              className={classes.listItem}
            />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

export default Headers;
