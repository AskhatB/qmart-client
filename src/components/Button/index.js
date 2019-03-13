import React from 'react';
import { Wrap } from './style';

const Button = ({
  width,
  height,
  color,
  fontColor,
  children,
  jc,
  top,
  onClick
}) => {
  return (
    <Wrap
      width={width}
      height={height}
      color={color}
      fontColor={fontColor}
      jc={jc}
      top={top}
      onClick={() => onClick()}
    >
      {children}
    </Wrap>
  );
};

export default Button;
