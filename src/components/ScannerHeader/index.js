import React from 'react';
import { Wrap, AppName } from './style';
import Logo from '../../icons/logo';

const ScannerHeader = () => {
  return (
    <Wrap>
      <Logo width="30px" height="30px" />
      <AppName>mart</AppName>
    </Wrap>
  );
};

export default ScannerHeader;
