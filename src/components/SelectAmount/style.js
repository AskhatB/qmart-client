import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  background: #eee;
  width: max-content;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #ddd;
  padding: 0 35px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  & > select{
    opacity: 0;
    width: 100%;
    position: absolute;
    height: 100%;
  }
`;
export const Text = styled.div``;