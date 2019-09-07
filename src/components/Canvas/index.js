import React from 'react';
import './style.css';

export default function Canvas(props) {
  return (
    <div className={'container-fluid'}>
      <div className={'row'}>
        <div className={'col-md d-flex justify-content-center'}>
          <canvas className={'border'} id={'canvas'} />
        </div>
        <div className={'col-md'}>
          <h1>Enter Your Name:</h1>

          <form>
            <input
              className={'form-control form-control-lg'}
              onChange={props.handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
