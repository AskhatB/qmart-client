import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 45px;
  background: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 16px;
  width: 33%;
  text-align: center;
  letter-spacing: 0.8px;
  color: #3e3e3e;
  font-weight: 600;
`;

export const Controls = styled.div`
  width: 33%;
  margin-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const IconWrap = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-start;
`;

export const Separator = styled.div`
width: 15px;
`;