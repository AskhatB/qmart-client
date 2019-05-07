import React from 'react';
import { Wrap, ScannerWrap, Text, RedLine } from './style';
import Header from '../../components/Header';
import Camera from '../../components/Camera';
import BarcodeIcon from '../../icons/barcode';

class ProductScanner extends React.Component {
  state = {
    code: 0
  };

  render() {
    return (
      <Wrap>
        <Header title="Сканер" />
        <ScannerWrap>
          <RedLine />
          <Camera width="100%" height="165px" history={this.props.history} />
        </ScannerWrap>
        <Text>Подведите камеру к штрихкоду</Text>
        <BarcodeIcon />
      </Wrap>
    );
  }
}

export default ProductScanner;
