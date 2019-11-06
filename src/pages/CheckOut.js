import React from 'react';
import { Link } from 'react-router-dom';
import tshirt from '../Assets/tshirt.png';

class CheckOut extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className='container'>
        <div className='row tshirtRow' id='backGroundImage'>
          <img
            src={this.props.location.state.canvasImage}
            id='shirtImage'
            alt='null'
          ></img>
        </div>
      </div>
    );
  }
}

export default CheckOut;
