import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class FunctoClass extends React.Component {
  state = {
    namearry: [],
    image: []
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container component='main' className={classes.root}>
        <CssBaseline />
        <Grid
          container
          xs={false}
          sm={4}
          md={7}
          justify='center'
          alignItems='center'
        >
          <canvas className={'border'} id={'canvas'} width={725} height={250} />
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Names and Angles
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                id='outlined-full-width'
                style={{ margin: 8 }}
                helperText='Write your name! Or whatever you want!'
                fullWidth
                margin='normal'
                variant='outlined'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

FunctoClass.propTypes = {
  classes: PropTypes.object.isRequired
};

export default makeStyles(useStyles)(FunctoClass);
