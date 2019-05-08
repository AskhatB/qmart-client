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
      <Controls>
        <Link to="/cart">
          <CartIcon width="24px" />
        </Link>
      </Controls>
    </Wrap>
  );
};

export default Header;
