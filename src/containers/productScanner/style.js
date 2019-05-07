import styled from 'styled-components';

export const Wrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #3b88c3;
`;

export const ScannerWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Text = styled.div`
  margin-top: 100px;
  color: #fff;
`;

export const RedLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  background: red;
  opacity: 0.5;
  width: 100%;
  height: 10px;
`;