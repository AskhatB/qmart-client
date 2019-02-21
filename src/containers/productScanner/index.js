import React from 'react';
import { Wrap } from './style';
import BarcodeReader from 'react-barcode-reader';

class ProductScanner extends React.Component {
  handleScan = (data) => {
    console.log('scan', data);
  };

  handleError = data => {
    console.log('error =>>', data);
  };

  render() {
    
    return (
      <Wrap>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan}/>
      </Wrap>
    );
  }
}

export default ProductScanner;
