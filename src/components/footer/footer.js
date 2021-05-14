import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: '0',
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <Typography variant="body2" component="p">
            <div>
              Icons made by{' '}
              <a href="https://www.freepik.com" title="Freepik">
                Freepik
              </a>{' '}
              from{' '}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" component="p">
            Build with patience
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" component="p">
            &copy;{new Date().getFullYear()} Andi
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
