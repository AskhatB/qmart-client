import styled from 'styled-components';

export const Wrap = styled.button`
  display: block;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.color};
  color: ${props => props.fontColor};
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  padding: 0 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  display: flex;
  align-items: center;
  ${props => props.jc === 'center' && 'justify-content: center'};
  margin-top: ${props => props.top || '0'};
`;
