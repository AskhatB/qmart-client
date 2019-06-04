import React from 'react';
import { InputWrap, Wrap, FirstNumber } from './style';

const InputPhone = ({
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
    <Wrap top={top} left={left} right={right} bottom={bottom}>
      <FirstNumber>+7</FirstNumber>
      <InputWrap
        onChange={onChange}
        width={width}
        height={height}
        placeholder={placeholder}
        type={type}
        name="phone"
      />
    </Wrap>
  );
};

export default InputPhone;
