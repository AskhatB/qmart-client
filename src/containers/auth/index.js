import React, { Component } from 'react';
import axios from 'axios';
import { Wrap, Logo, AppName, ButtonBlock } from './style';
import Input from '../../components/Input';
import InputPhone from '../../components/InputPhone';
import LogoIcon from '../../icons/logo';
import Button from '../../components/Button';
import ErrorBlock from '../../components/ErrorBlock';
import { Link, Redirect } from 'react-router-dom';

class Auth extends Component {
  state = {
    phone: '',
    password: '',
    redirect: false,
    error: false
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onLogIn = async () => {
    const { phone, password } = this.state;
    const response = await axios.post('/client-sign-in', {
      phone: parseInt(phone, 10),
      password: password
    });
    if (response.data.status) {
      console.log(response.data.status);
      this.setState({ error: true });
      setTimeout(() => this.setState({ error: false }), 2000);
    } else {
      localStorage.setItem('qmart-client-id', response.data.client_id);
      this.setState({ redirect: true });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
        {this.state.error && <ErrorBlock>Ошибка авторизации</ErrorBlock>}
        <Wrap>
          <Logo>
            <LogoIcon width="100px" height="100px" />
            <AppName>Qmart</AppName>
          </Logo>
          <InputPhone
            width="100%"
            height="40px"
            type="text"
            placeholder="Телефон"
            onChange={this.onInputChange}
          />
          <Input
            width="100%"
            height="40px"
            top="20px"
            type="password"
            placeholder="Пароль"
            onChange={this.onInputChange}
            name="password"
          />
          <ButtonBlock />
          <Button
            width="100%"
            height="40px"
            color="#3b88c3"
            fontColor="#fff"
            jc="center"
            onClick={this.onLogIn}
          >
            Войти
          </Button>
          <Link to="/registration">
            <Button
              width="100%"
              height="40px"
              color="#3bb574"
              fontColor="#fff"
              jc="center"
              top="15px"
              onClick={() => console.log('next')}
            >
              Регистрация
            </Button>
          </Link>
        </Wrap>
      </>
    );
  }
}

export default Auth;
