import {
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    marginTop: '8px',
    height: `calc(${theme.breakpoints.values.sm}px/2)`,
  },
  bio: {
    // overflow: 'hidden',
    // height: `calc(${theme.breakpoints.values.sm}px/2)`,
  },
  paper: {
    padding: '6px 16px',
  },
  firstPaper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  lastPaper: {
    marginBottom: theme.spacing(2),
  },
}));

function Portfolio() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} justify="center">
      <Grid item xs={11}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={3}>
            <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            />
          </Grid>
          <Grid item xs={12} md={3} className={classes.bio}>
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="h4" component="h4">
                This Title
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedquis
                metus ac tellus dignissim tempor in vitae diam. Sedeleifend
                ipsum sapien, a auctor felis ultrices nec. Suspendissesed nibh
                tortor. Morbi ut eros imperdiet, suscipit eros imperdiet,
                blandit dui. Sed et mauris at ligula auctor malesuada quis quis
                ligula. Nunc metus sapien, suscipit id nibh vitae, sagittis
                scelerisque urna. Aenean iaculis ex nec orci feugiat lobortis.
                Nulla placerat ac diam a aliquet. Etiam aliquet faucibus urna
                quis dignissim. Vivamus molestie pellentesque ullamcorper. Sed
                porta augue massa, a vehicula odio tincidunt eget. Donec vel
                luctus magna, sit amet vehicula nulla. In placerat justo quis
                augue vehicula accumsan. Aliquam lobortis mattis gravida. Nam eu
                semper leo.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={1}>
              <Grid container justify="center">
                <Grid item xs={11} className={classes.firstPaper}>
                  <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h6">
                      2011
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sedquis metus ac tellus dignissim tempor in vitae diam.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={11} className={classes.lastPaper}>
                  <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h6">
                      2015
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sedquis metus ac tellus dignissim tempor in vitae diam.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={11} className={classes.lastPaper}>
                  <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h6">
                      2018
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sedquis metus ac tellus dignissim tempor in vitae diam.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={11} className={classes.lastPaper}>
                  <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h6">
                      2019
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sedquis metus ac tellus dignissim tempor in vitae diam.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
