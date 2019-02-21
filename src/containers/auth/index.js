import React, { Component } from 'react';
import { Wrap, Logo, AppName, ButtonBlock } from './style';
import Input from '../../components/Input';
import LogoIcon from '../../icons/logo';
import Button from '../../components/Button';

class Auth extends Component {
  render() {
    return (
      <Wrap>
        <Logo>
          <LogoIcon />
          <AppName>Qmart</AppName>
        </Logo>
        <Input width="100%" height="40px" type="text" placeholder="Логин" />
        <Input
          width="100%"
          height="40px"
          top="20px"
          type="password"
          placeholder="Пароль"
        />
        <ButtonBlock />
        <Button
          width="100%"
          height="40px"
          color="#3b88c3"
          fontColor="#fff"
          jc="center"
        >
          Войти
        </Button>
        <Button
          width="100%"
          height="40px"
          color="#3bb574"
          fontColor="#fff"
          jc="center"
          top="15px"
        >
          Регистрация
        </Button>
      </Wrap>
    );
  }
}

export default Auth;
