import React from 'react';
import { Wrap } from './style';
import QRReader from 'react-qr-reader';

class CheckIn extends React.Component {

  scanHandle = data => {
    console.log('ssss', data);
  };
  
  render() {
    return (
      <Wrap>
        <QRReader onScan={this.scanHandle} />
      </Wrap>
    );
  }
}

export default CheckIn;
