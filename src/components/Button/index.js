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
  left,
  right,
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
      left={left}
      right={right}
      onClick={() => onClick()}
    >
      {children}
    </Wrap>
  );
};

export default Button;
