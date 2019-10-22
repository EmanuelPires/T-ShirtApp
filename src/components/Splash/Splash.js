import React, { Fragment } from 'react';
import spinner from '../../Assets/maxresdefault.jpg';

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        width: '100%',
        height: '100%',
        margin: 'auto',
        display: 'block'
      }}
      alt='Loading...'
    />
  </Fragment>
);
