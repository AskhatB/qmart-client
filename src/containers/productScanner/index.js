import React from 'react';
import { Wrap, ScannerWrap, Text, RedLine } from './style';
import Header from '../../components/Header';
import Camera from '../../components/Camera';
import FloatButton from '../../components/FloatButton';
import { Link } from 'react-router-dom';

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
        <Link to="/barcode-input">
          <FloatButton />
        </Link>
      </Wrap>
    );
  }
}

export default ProductScanner;
