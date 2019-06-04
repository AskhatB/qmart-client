import React from 'react';
import { Wrap } from './style';

const FloatButton = ({ onClick }) => {
  return <Wrap onClick={onClick}>Ввести вручную</Wrap>;
};

export default FloatButton;
