import React from 'react';
import { Wrap, Text } from './style';

const SelectAmount = ({ text, options, active, onChange }) => {
  return (
    <Wrap>
      <Text>{text}</Text>
      <select onChange={onChange}>
        {options.map(val => {
          return (
            <option key={val} value={val} defaultValue={active === val}>
              {val}
            </option>
          );
        })}
      </select>
    </Wrap>
  );
};

export default SelectAmount;
