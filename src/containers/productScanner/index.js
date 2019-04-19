import React from 'react';
import { Wrap, ScannerWrap, Text } from './style';
import Header from '../../components/Header';
import Quagga from 'quagga';

class ProductScanner extends React.Component {
  state = {
    code: 0
  }
  _onDetected(result) {
    console.log('ss', result.codeResult.code);
    this.setState({
      code: result.codeResult.code
    })
  }
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 320,
            height: 320,
            facingMode: 'environment' // or user
          }
        },
        locator: {
          patchSize: 'x-large',
          halfSample: true
        },
        numOfWorkers: 0,
        decoder: {
          readers: ['ean_reader']
        },
        locate: true
      },
      function(err) {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(this._onDetected);
  }

  // componentWillUnmount() {
  //   Quagga.offDetected(this._onDetected);
  // }

  handleScan = data => {
    console.log('scan', data);
  };

  handleError = data => {
    console.log('error =>>', data);
  };

  render() {
    return (
      <Wrap>
        {/* <BarcodeReader onError={this.handleError} onScan={this.handleScan} /> */}
        <Header title="Сканер" />
        <ScannerWrap>
          <div id="interactive" className="viewport" />
        </ScannerWrap>
        <Text>Подведите камеру к штрихкоду</Text>
        <div>{this.state.code}</div>
      </Wrap>
    );
  }
}

export default ProductScanner;
