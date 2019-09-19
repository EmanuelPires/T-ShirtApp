import React from 'react';

import Jumbo from '../components/Jumbo/index';

class Tshirts extends React.Component {
  state = {
    namearray: []
  };

  componentDidMount() {
    console.log('Hey Now!');
  }

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
        var letter1 = word[i - 1];
        var letter2 = word[i];

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

  deleteLetter = event => {
    var deleteCode = event.which;

    if (deleteCode === 8) {
      var c = document.getElementById('canvas');
      var ctx = c.getContext('2d');
      ctx.clearRect(0, 0, c.width, c.height);
      var deleteWord = this.state.namearray;
      deleteWord.pop();
      this.setState({ namearray: deleteWord });
      console.log(this.state.namearray);
      let coordKey = {
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
      let word = this.state.namearray;

      for (var i = 1; i < word.length; i++) {
        var letter1 = word[i - 1];
        var letter2 = word[i];

        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(coordKey[word[i - 1]][0], coordKey[word[i - 1]][1]);
        // debugger;
        ctx.lineTo(coordKey[word[i]][0], coordKey[word[i]][1]);
        ctx.stroke();
      }
    }
  };

  //UpdateCanvas is so that you can see the image of the keyboard

  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    var imageObj1 = new Image();
    imageObj1.src = 'http://kbd-intl.narod.ru/images/en.png';
    imageObj1.onload = function() {
      ctx.drawImage(imageObj1, 0, 0);
    };
  }

  //End of Functions

  render() {
    return (
      <div>
        <Jumbo />
        <div className={'container-fluid'}>
          <div className={'row'}>
            <div className={'col-md d-flex justify-content-center'}>
              <canvas
                ref='canvas'
                className={'border'}
                id={'canvas'}
                width={725}
                height={250}
              />
            </div>
            <div className={'col-md'}>
              <h1>Enter Your Name:</h1>

              <form>
                <input
                  className={'form-control form-control-lg'}
                  onKeyPress={this.handleChange}
                  onKeyDown={this.deleteLetter}
                  id='nameInput'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tshirts;
