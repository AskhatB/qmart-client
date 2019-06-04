import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ErrorBlock from '../../components/ErrorBlock';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Wrap } from './style';

class BarcodeInput extends React.Component {
  state = {
    barcode: 0
  };
  onInputChange = e => {
    const { value } = e.target;
    this.setState({ barcode: value });
  };
  onBarcodeCheck = () => {
    axios
      .post('/product-by-barcode', {
        barcode: this.state.barcode,
        sup_id: 1
      })
      .then(res => {
        console.log('res', res);
        if (res.data.length === 0) {
          this.setState({ error: true });
          setTimeout(() => this.setState({ error: false }), 2000);
        } else {
          this.setState({ redirect: true });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/product/${this.state.barcode}`} />;
    }
    return (
      <>
        <Header title="Штрих-код" />
        {this.state.error && <ErrorBlock>Штрих-код не найден</ErrorBlock>}
        <Wrap>
          <Input
            width="100%"
            height="40px"
            top="20px"
            type="number"
            placeholder="Введите штрих-код"
            onChange={this.onInputChange}
            name="barcode"
          />
          <Button
            width="100%"
            height="40px"
            color="#3b88c3"
            fontColor="#fff"
            jc="center"
            top="20px"
            onClick={this.onBarcodeCheck}
          >
            Перейти к продукту
          </Button>
        </Wrap>
      </>
    );
  }
}

export default BarcodeInput;
