import React from 'react';
import { Wrap, Title, Controls, IconWrap } from './style';
import BackIcon from '../../icons/back';
import CartIcon from '../../icons/cart';
import { history } from '../../history';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <Wrap>
      <IconWrap onClick={() => history.goBack()}>
        <BackIcon />
      </IconWrap>
      <Title>{title}</Title>
      <Link to="/cart">
        <Controls>
          <CartIcon width="24px" />
        </Controls>
      </Link>
    </Wrap>
  );
};

export default Header;
