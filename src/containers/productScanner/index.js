import React from 'react';
import { Wrap, ScannerWrap, Text, RedLine } from './style';
import Header from '../../components/Header';
import Camera from '../../components/Camera';

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
          <Camera width="100%" height="auto" history={this.props.history} />
        </ScannerWrap>
      </Wrap>
    );
  }
}

export default ProductScanner;
