import React from 'react';
import Jumbo from '../components/Jumbo/index';
import Splash from '../components/Splash/Splash';
class CheckOut extends React.Component {
  state = { image: [] };

  render() {
    return (
      <div>
        <Splash />
      </div>
    );
  }
}

export default CheckOut;
