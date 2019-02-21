import styled from 'styled-components';

export const Wrap = styled.div`
  width: 49.848%;
  border-right: 1px solid #ddd;
  border-top: 1px solid #ddd;
  &:nth-child(2n + 2) {
    border-right: 0;
  }
`;
export const Image = styled.div`
  width: 100%;
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100px;
  }
`;
export const Name = styled.div`
  margin-top: 10px;
  font-weight: 500;
  color: #3e3e3e;
`;
export const Price = styled.div`
  margin: 10px 0;
  font-weight: 700;
  color: #b34e25;
`;
