import React from 'react';
import { Wrap, Title, Controls, IconWrap } from './style';
import BackIcon from '../../icons/back';

const Header = ({ title }) => {
  return (
    <Wrap>
      <IconWrap>
        <BackIcon />
      </IconWrap>
      <Title>{title}</Title>
      <Controls />
    </Wrap>
  );
};

export default Header;
