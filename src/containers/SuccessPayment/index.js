import React from 'react';
import { Wrap, Text1, Text2, ImageWrap } from './style';
import SuccessIcon from '../../icons/success';
import Header from '../../components/ScannerHeader';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

class SuccessPayment extends React.Component {
  render() {
    return (
      <Wrap>
        <Header />
        <Text1>Поздравляем!</Text1>
        <Text2>
          Оплата прошла успешно. Спасибо за исползование нашего сервиса.
        </Text2>
        <ImageWrap>
          <SuccessIcon />
        </ImageWrap>
        <Link to="/">
          <Button
            color="#3b88c3"
            fontColor="#fff"
            height="45px"
            jc="center"
            left="auto"
            right="auto"
            top="10px"
          >
            Вернуться к сканированию
          </Button>
        </Link>
      </Wrap>
    );
  }
}

export default SuccessPayment;
