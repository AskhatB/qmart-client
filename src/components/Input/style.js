import styled from 'styled-components';

export const InputWrap = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  background: #eee;
  border-radius: 7px;
  border: none;
  outline: none;
  margin-top: ${props => props.top};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-bottom: ${props => props.bottom};
  box-sizing: border-box;
  padding: 0 20px;
  border: 1px solid #e6e6e6;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
`;
