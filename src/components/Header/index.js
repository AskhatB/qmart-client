import React from 'react';
import { Wrap, Title, Controls, IconWrap } from './style';
import BackIcon from '../../icons/back';
import CartIcon from '../../icons/cart';

const Header = ({ title }) => {
  return (
    <Wrap>
      <IconWrap>
        <BackIcon />
      </IconWrap>
      <Title>{title}</Title>
      <Controls>
        <CartIcon />
      </Controls>
    </Wrap>
  );
};

export default Header;
