import React from 'react';

class CheckOut extends React.Component {
  state = { image: [] };

  canvasImage = props => {
    console.log(props.location.state);
  };

  componentDidMount() {
    this.canvasImage();
  }

  render() {
    return <div>Hello</div>;
  }
}

export default CheckOut;
