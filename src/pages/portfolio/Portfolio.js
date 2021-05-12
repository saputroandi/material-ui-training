import {
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { GET } from '../../services/services';
import { Bar } from 'react-chartjs-2';

const rootUrl = process.env.REACT_APP_ROOT_URL;
const githubUrl = process.env.REACT_APP_API_GITHUB_URL;
const endPoint = '/users/saputroandi/repos';

const converDataToCartObjectArrays = (arrays) => {
  let languages = arrays.reduce((total, item) => {
    const { language } = item;
    if (!language) {
      total['Other'] = 1;
    } else if (!total[language]) {
      total[language] = 1;
    } else {
      total[language] = total[language] + 1;
    }
    return total;
  }, {});
  return languages;
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    marginTop: '8px',
    height: `calc(${theme.breakpoints.values.sm}px / 2)`,
    backgroundImage: `url(${rootUrl}/assets/img/IMG_20200509_033424_569.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
  },
  bgColor: {
    position: 'absolute',
    height: `100%`,
    width: '100%',
    background:
      'linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0))',
    backgroundSize: 'cover',
  },
  profileAttribute: {
    height: '100%',
    padding: '6px 16px',
  },
  profileTextPrimary: {
    color: '#d6d6d6',
  },
  profileTextSecondary: {
    color: '#d6d6d6',
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
  githubStats: {
    width: '100%',
    height: `calc(${theme.breakpoints.values.sm}px/2)`,
  },
  contactMe: {
    width: '100%',
    height: `calc(${theme.breakpoints.values.sm}px/2)`,
  },
}));

function Portfolio() {
  const classes = useStyles();
  const [data, setData] = useState({});
  useEffect(() => {
    GET(githubUrl, endPoint, (res) => {
      setData(converDataToCartObjectArrays(res.data));
    });
  }, []);
  return (
    <Grid container className={classes.root} justify="center">
      <Grid item xs={11}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={3}>
            <Paper className={classes.image}>
              <Paper className={classes.bgColor}>
                <Grid
                  container
                  justify="flex-start"
                  alignItems="flex-end"
                  className={classes.profileAttribute}
                >
                  <Grid item>
                    <Typography
                      variant="h4"
                      component="h6"
                      className={classes.profileTextPrimary}
                    >
                      Andi
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className={classes.profileTextSecondary}
                    >
                      Lorem ipsum dolor sit amet.
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
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
          <Grid item xs={12} md={3}>
            {/* chart */}
            <Paper className={classes.githubStats}>
              <Bar
                data={{
                  datasets: [
                    {
                      label: 'Top Language',
                      data: data,
                      backgroundColor: [
                        'rgba(174, 62, 176, 0.7)',
                        'rgba(242, 232, 44, 0.7)',
                        'rgba(44, 64, 242, 0.7)',
                        'rgba(237, 28, 28, 0.7)',
                        'rgba(161, 157, 157, 0.7)',
                      ],
                    },
                  ],
                }}
                options={{
                  maintainAspectRatio: false,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Portfolio;
