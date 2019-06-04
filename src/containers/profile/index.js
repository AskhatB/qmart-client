import React from 'react';
import Header from '../../components/Header';
import { Wrap, InfoWrap, InfoBlock, InfoLabel, InfoValue } from './style';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Profile extends React.Component {
  state = {
    client: null,
    loading: true
  };
  componentWillMount = async () => {
    const response = await axios.post('/client-info', { id: 16 });
    this.setState({ client: response.data, loading: false });
  };
  render() {
    if (this.state.loading) return <div />;
    console.log(this.state.client);
    const { first_name, last_name, phone } = this.state.client;
    return (
      <Wrap>
        <Header title="Профиль" />
        <InfoWrap>
          <InfoBlock>
            <InfoLabel>Имя</InfoLabel>
            <InfoValue>{first_name}</InfoValue>
          </InfoBlock>
          <InfoBlock>
            <InfoLabel>Фамилия</InfoLabel>
            <InfoValue>{last_name}</InfoValue>
          </InfoBlock>
          <InfoBlock>
            <InfoLabel>Телефон</InfoLabel>
            <InfoValue>+7{phone}</InfoValue>
          </InfoBlock>
        </InfoWrap>
        <Link to="/auth">
          <Button
            width="100%"
            height="40px"
            color="#3b88c3"
            fontColor="#fff"
            jc="center"
            top="50px"
            onClick={() => localStorage.removeItem('qmart-client-id')}
          >
            Выйти
          </Button>
        </Link>
      </Wrap>
    );
  }
}
export default Profile;
