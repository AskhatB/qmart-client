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
  bottom,
  name
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
      name={name}
    />
  );
};

export default Input;
