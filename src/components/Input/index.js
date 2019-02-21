import React from 'react';
import { InputWrap } from './style';

const Input = ({
  onChange,
  width,
  height,
  placeholder,
  type,
  top,
  left,
  right,
  bottom
}) => {
  return (
    <InputWrap
      onChange={onChange}
      width={width}
      height={height}
      placeholder={placeholder}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      type={type}
    />
  );
};

export default Input;
