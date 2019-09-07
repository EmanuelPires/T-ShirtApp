import React from 'react';

import Jumbo from '../components/Jumbo/index';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

class Tshirts extends React.Component {
  state = {
    namearray: []
  };

  handleChange = event => {
    var newNameState = this.state.namearray;

    newNameState.push(event.key);

    this.setState({ namearray: newNameState }, function() {
      console.log(this.state.namearray);
    });

    console.log(this.state.namearray);

    const coordKey = {
      a: [10, 50],
      b: [30, 70],
      c: [400, 300]
    };

    var a = Object.keys(coordKey);
    console.log(a);

    console.log(coordKey.a);

    if (this.state.namearray.length >= 2) {
      console.log('more than 2');

      let word = this.state.namearray;

      for (var i = 1; i < word.length; i++) {
        var letter1 = word[i - 1];
        var letter2 = word[i];
        console.log(letter1);
        console.log(letter2);
        console.log(coordKey[letter1]);

        var c = document.getElementById('canvas');
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(coordKey[word[i - 1]][0], coordKey[word[i - 1]][1]);
        // debugger;
        ctx.lineTo(coordKey[word[i]][0], coordKey[word[i]][1]);
        ctx.stroke();
      }

      var c = document.getElementById('canvas');
      var ctx = c.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(coordKey.a[0], coordKey.a[1]);
      ctx.lineTo(coordKey.b[0], coordKey.b[1]);
      ctx.stroke();
    } else {
      console.log('less than 2');
      var newStateArray = this.state.namearray.slice();
      newStateArray.push(event.key);
      this.setState({ namearray: newStateArray }, function() {
        console.log(this.state.namearray);
      });
    }
  };

  componentDidUpdate() {
    let thisArray = this.state.namearray;
    for (var i = 0; i < thisArray.length; i++) {
      console.log(thisArray[i]);
    }
  }

  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');

    var imageObj1 = new Image();
    imageObj1.src = 'http://kbd-intl.narod.ru/images/en.png';
    imageObj1.onload = function() {
      ctx.drawImage(imageObj1, 0, 0);
    };
  }

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

const coordKey = {
  a: (10, 50),
  b: (30, 70)
};

var a = Object.keys(coordKey);
console.log(a);
