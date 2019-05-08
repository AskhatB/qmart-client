import React from 'react';
import Header from '../../components/Header';
import BankCardForm from '../../components/BankCardForm';
import { Wrap, Layout, LogoBlock, AppName, Text } from './style';
import Logo from '../../icons/logo';

class Payment extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    focused: ''
  };

  render() {
    const { amount } = this.props.match.params;
    return (
      <Wrap>
        <Header title="Оплата" />
        <Layout>
          <LogoBlock>
            <Logo width="30px" height="30px" />
            <AppName>mart</AppName>
            <Text>Оплата</Text>
          </LogoBlock>
          <BankCardForm amount={amount} />
        </Layout>
      </Wrap>
    );
  }
}

export default Payment;
