import styled from 'styled-components';

export const Wrap = styled.div`
  background: #3b88c3;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  & section > div {
    box-shadow: rgb(246, 250, 252) 0px 0px 0px 5px inset !important;
  }
`;

export const Description = styled.div`
  color: #fff;
  font-size: 14px;
  margin: 35px;
`;
