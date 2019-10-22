import React from 'react';
import Materialshirt from '../components/MaterialShirt/Materialshirt';

class Tshirtmain extends React.Component {
  state = {
    namearray: [],
    image: []
  };

  render() {
    return (
      <div>
        <Materialshirt />
      </div>
    );
  }
}

export default Tshirtmain;
