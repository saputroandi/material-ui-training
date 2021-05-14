import {
  Button,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import { GET } from '../../services/services';
import { Bar } from 'react-chartjs-2';
import Anchor from '../../components/anchor/anchor';
import handleTelegram from '../../services/telegram';

const rootUrl = process.env.REACT_APP_ROOT_URL;
const githubUrl = process.env.REACT_APP_API_GITHUB_URL;
const endPoint = '/users/saputroandi/repos';
const initialMessages = {
  message: '',
  detailMessage: '',
};

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
    // height: `calc(${theme.breakpoints.values.sm}px/2)`,
  },
  headerMessagesField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  emailField: {
    marginBottom: theme.spacing(2),
  },
  messagesField: {
    marginBottom: theme.spacing(2),
  },
  sendButton: {
    marginBottom: theme.spacing(2),
  },
  instagram: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundImage: `url(${rootUrl}/assets/img/instagram.png)`,
    backgroundSize: 'cover',
  },
  github: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundImage: `url(${rootUrl}/assets/img/github-logo-silhouette-in-a-square.png)`,
    backgroundSize: 'cover',
  },
  social: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

function Portfolio() {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [messages, setMessages] = useState(initialMessages);
  const [messageError, setMessageError] = useState(false);
  const [detailMessageError, setDetailMessageError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageError(false);
    setDetailMessageError(false);

    if (messages.message === '') {
      setMessageError(true);
    }
    if (messages.detailMessage === '') {
      setDetailMessageError(true);
    }

    if (messages.message && messages.detailMessage) {
      handleTelegram(messages);
    }
  };

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
                      variant="h6"
                      component="h6"
                      className={classes.profileTextPrimary}
                    >
                      Web Devloper
                    </Typography>
                    <Typography
                      variant="caption"
                      component="p"
                      className={classes.profileTextSecondary}
                    >
                      Currently i'm working as Senior Production Operator
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} className={classes.bio} id="biograph">
            <Paper elevation={1} className={classes.paper}>
              <Typography variant="h5" component="h5">
                My Biograph
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                Hai i'm web developer. I spend my whole day, practically every
                day, experimenting with HTML, CSS, and JavaScript; dabbling with
                PHP and NodeJs. I build websites that delight and inform. I do
                it well.
                <br />
                <br />
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                I’m curious, and I enjoy work that challenges me to learn
                something new and stretch in a different direction. I do my best
                to stay on top of changes in the state of the art so that I can
                meet challenges with tools well suited to the job at hand.
                <br />
                <br />
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                align="justify"
              >
                A slight clarification of the above: I’m actually a graduates as
                automotive student cleverly disguised as a web developer. Since
                it was relatively clear early on that it would be slightly more
                than difficult to make a living as mechanical engineering, I’ve
                focused my energies on the web, which happily has proven itself
                to be a wonderful decision.
              </Typography>
              <Grid item xs={11}>
                <Grid
                  className={classes.social}
                  container
                  xs={12}
                  alignItems="flex-end"
                  justify="space-evenly"
                >
                  <Grid item>
                    <Anchor href="https://www.instagram.com/above_youuu/">
                      <div className={classes.instagram}></div>
                    </Anchor>
                  </Grid>
                  <Grid item>
                    <Anchor href="#">
                      <div className={classes.github}></div>
                    </Anchor>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} id="timeline">
            <Paper elevation={1}>
              <Grid container justify="center">
                <Grid item xs={11} className={classes.firstPaper}>
                  <Typography variant="h5" component="h5">
                    My Timeline
                  </Typography>
                </Grid>
                <Grid item xs={11} className={classes.lastPaper}>
                  <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h6">
                      2011
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      align="justify"
                    >
                      Graduates from high school as automotive student.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={11} className={classes.lastPaper}>
                  <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h6">
                      2012 - 2015
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      align="justify"
                    >
                      Working at manufacturing company as programmer for
                      manufacturing machine. This is where i starting love to
                      code, even though i code for manufacturing machine.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={11} className={classes.lastPaper}>
                  <Paper elevation={1} className={classes.paper}>
                    <Typography variant="h6" component="h6">
                      2018 - present
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      align="justify"
                    >
                      I get college in computer science.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} id="language">
            <Paper elevation={1} className={classes.githubStats}>
              <Grid container justify="center">
                <Grid item xs={11}>
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
                    className={classes.githubStats}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} id="contact">
            <Paper className={classes.contactMe} elevation={1}>
              <Grid container justify="center">
                <Grid item xs={11}>
                  <Typography
                    variant="h6"
                    component="h6"
                    className={classes.headerMessagesField}
                  >
                    Contact
                  </Typography>
                </Grid>
                <Grid item xs={11}>
                  <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                      onChange={(e) =>
                        setMessages({ ...messages, message: e.target.value })
                      }
                      label="Your Email Or Phone Number"
                      variant="outlined"
                      required
                      fullWidth
                      className={classes.emailField}
                      error={messageError}
                    />
                    <TextField
                      onChange={(e) =>
                        setMessages({
                          ...messages,
                          detailMessage: e.target.value,
                        })
                      }
                      label="Your Messages"
                      variant="outlined"
                      multiline
                      rows={3}
                      required
                      fullWidth
                      className={classes.messagesField}
                      error={detailMessageError}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.sendButton}
                      endIcon={<SendIcon />}
                    >
                      Send
                    </Button>
                  </form>
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
