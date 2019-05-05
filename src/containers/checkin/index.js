import React from 'react';
import QRReader from 'react-qr-reader';
import Header from '../../components/ScannerHeader';
import { Wrap, Description } from './style';
import QrWhiteIcon from '../../icons/qrWhite';

class CheckIn extends React.Component {
  scanHandle = data => {
    const { history } = this.props;
    if (data !== null) {
      console.log('ssss', data);
      localStorage.setItem('qmart::partner_id', data);
      history.push('/product-scanner');
    }
  };
  render() {
    return (
      <Wrap>
        <Header />
        <QRReader onScan={this.scanHandle} />
        <Description>Отсканируйте QR-код при входе магазина</Description>
        <QrWhiteIcon width="50px" height="50px" />
      </Wrap>
    );
  }
}

export default CheckIn;
