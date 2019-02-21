import styled from 'styled-components';

export const Wrap = styled.div``;

export const Layout = styled.div`
  margin: 15px 10px;
`;
export const BrandName = styled.div`
  color: #3b88c3;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
`;
export const ProductName = styled.div`
  margin-top: 10px;
  font-weight: 600;
  color: #3e3e3e;
`;
export const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 10px;
  & > img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const Price = styled.div`
  font-weight: 700;
  color: #3e3e3e;
  margin-top: 15px;
  font-size: 20px;
`;

export const BuyingBlock = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
`;

export const Watched = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
`;