import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { Wrap, FlexBlock, Total } from './style';
import { Link } from 'react-router-dom';

const BankCardForm = ({ amount }) => {
  return (
    <Wrap>
      <Total>Общая стоимость: {amount} тенге</Total>
      <Input width="100%" height="45px" placeholder="Номер карты" />
      <FlexBlock>
        <Input
          width="50%"
          height="45px"
          right="10px"
          top="10px"
          placeholder="ММ/ГГ"
        />
        <Input
          width="50%"
          height="45px"
          left="10px"
          top="10px"
          placeholder="CVV"
        />
      </FlexBlock>
      <Input width="100%" height="45px" top="10px" placeholder="Имя на карте" />
      <Input width="100%" height="45px" top="10px" placeholder="E-mail" />
      <Link to="/success">
        <Button
          color="#3c88c3"
          fontColor="#fff"
          height="45px"
          width="100%"
          jc="center"
          top="10px"
        >
          Оплатить
        </Button>
      </Link>
    </Wrap>
  );
};

export default BankCardForm;
