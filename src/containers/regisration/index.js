import React, { Component } from 'react';
import { Wrap, Logo, AppName, ButtonBlock } from './style';
import Input from '../../components/Input';
import InputPhone from '../../components/InputPhone';
import LogoIcon from '../../icons/logo';
import Button from '../../components/Button';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

class Registration extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    redirect: false,
    error: false
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onRegisr = async () => {
    try {
      await axios.post('/client-registration', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: parseInt(this.state.phone, 10),
        password: this.state.password
      });
      this.setState({ redirect: true });
    } catch (error) {
      console.log('data', error);
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <Wrap>
        <Logo>
          <LogoIcon width="100px" height="100px" />
          <AppName>Qmart</AppName>
        </Logo>
        <Input
          width="100%"
          height="40px"
          type="text"
          placeholder="Имя"
          onChange={this.onInputChange}
          name="firstName"
        />
        <Input
          width="100%"
          height="40px"
          top="20px"
          type="text"
          placeholder="Фамилия"
          onChange={this.onInputChange}
          name="lastName"
        />
        <InputPhone
          width="100%"
          height="40px"
          top="20px"
          type="number"
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
          onClick={this.onRegisr}
        >
          Зарегистрироваться
        </Button>
        <Link to="/auth">
          <Button
            width="100%"
            height="40px"
            color="#3bb574"
            fontColor="#fff"
            jc="center"
            top="15px"
            onClick={() => console.log('next')}
          >
            У меня есть аккаунт
          </Button>
        </Link>
      </Wrap>
    );
  }
}

export default Registration;
