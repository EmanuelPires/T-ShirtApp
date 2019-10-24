import React from 'react';
import Materialshirt from '../components/MaterialShirt/Materialshirt';

class Tshirtmain extends React.Component {
  state = {
    namearray: [],
    image: [],
    value: ''
  };

  handleChangeValue = e =>
    this.setState({ value: e.target.value }, function() {
      console.log(e.target);
    });

  handleChange = event => {
    var uniCode = event.which;
    var otherCode = event.charCode;
    console.log('This is the UniCode ' + uniCode + 'and charCode ' + otherCode);

    var newNameState = this.state.namearray;

    newNameState.push(event.which);

    this.setState({ namearray: newNameState }, function() {
      console.log(this.state.namearray);
    });

    const coordKey = {
      32: [350, 220],
      65: [110, 120],
      66: [325, 176],
      67: [228, 176],
      68: [208, 120],
      69: [198, 80],
      70: [253, 120],
      71: [305, 120],
      72: [349, 120],
      73: [435, 80],
      74: [400, 120],
      75: [444, 120],
      76: [495, 120],
      77: [425, 176],
      78: [375, 176],
      79: [480, 80],
      80: [529, 80],
      81: [99, 80],
      82: [245, 80],
      83: [160, 120],
      84: [290, 80],
      85: [389, 80],
      86: [280, 176],
      87: [150, 80],
      88: [185, 176],
      89: [338, 80],
      90: [139, 176],
      97: [110, 120],
      98: [325, 176],
      99: [228, 176],
      100: [208, 120],
      101: [198, 80],
      102: [253, 120],
      103: [305, 120],
      104: [349, 120],
      105: [435, 80],
      106: [400, 120],
      107: [444, 120],
      108: [495, 120],
      109: [425, 176],
      110: [375, 176],
      111: [480, 80],
      112: [529, 80],
      113: [99, 80],
      114: [245, 80],
      115: [160, 120],
      116: [290, 80],
      117: [389, 80],
      118: [280, 176],
      119: [150, 80],
      120: [185, 176],
      121: [338, 80],
      122: [139, 176]
    };

    if (this.state.namearray.length >= 2) {
      console.log('more than 2');

      let word = this.state.namearray;

      for (var i = 1; i < word.length; i++) {
        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(coordKey[word[i - 1]][0], coordKey[word[i - 1]][1]);
        // debugger;
        ctx.lineTo(coordKey[word[i]][0], coordKey[word[i]][1]);
        ctx.stroke();
      }
    } else {
      console.log('less than 2');
      var newStateArray = this.state.namearray.slice();
      newStateArray.push(event.which);
      this.setState({ namearray: newStateArray }, function() {
        console.log(this.state.namearray);
      });
    }
  };

  render() {
    return (
      <div>
        <Materialshirt
          handleChange={this.handleChange}
          value={this.state.value}
          onChangeValue={this.handleChangeValue}
        />
      </div>
    );
  }
}

export default Tshirtmain;
