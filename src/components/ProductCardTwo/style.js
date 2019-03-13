import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  box-sizing: border-box;
`;

export const Layout = styled.div`
  display: flex;
`;
export const Image = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const Info = styled.div`
  margin-left: 10px;
`;
export const Name = styled.div`
  text-align: left;
  font-size: 14px;
`;
export const Amount = styled.div`
  color: #3c88c3;
`;
export const Remove = styled.div`
  font-weight: 600;
  color: #ff3300;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 600;
`;

export const Price = styled.div`
  text-align: left;
  font-weight: 600;
  margin-top: 10px;
`;