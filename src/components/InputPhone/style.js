import styled from 'styled-components';

export const InputWrap = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  background: #eee;
  border-radius: 7px;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 0 45px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px; 
`;

export const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  border-radius: 7px;
  border: 1px solid #e6e6e6;
  margin-top: ${props => props.top};
  margin-left: ${props => props.left};
  margin-right: ${props => props.right};
  margin-bottom: ${props => props.bottom};
`;

export const FirstNumber = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`;