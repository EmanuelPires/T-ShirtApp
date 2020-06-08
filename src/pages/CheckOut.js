import React from 'react';

import tshirt from '../Assets/tshirt.png';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Splash from '../components/Splash/Splash';

class CheckOut extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div class='container-flex'>
        <div class='row mainPage'>
          <div class='col-5 center-block' id='leftSide'>
            <div class='text-center'>
              <img src={tshirt} alt='null' class='img-fluid tShirtImage'></img>
              <img
                src={this.props.location.state.canvasImage}
                id='shirtImage'
                alt='null'
                class='chestImage'
              ></img>
            </div>
          </div>
          <div class='col-7 text-center'>
            <Typography component='h1' variant='h5'>
              NAMERUNNER
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckOut;

/* <img
            src={this.props.location.state.canvasImage}
            id='shirtImage'
            alt='null'
          ></img> */
