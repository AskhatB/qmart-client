import React from 'react';
import { Wrap, Image, Name, Price } from './style';

const ProductCardOne = ({ image, name, price }) => {
  return (
    <Wrap>
      <Image>
        <img src={image} alt="product"/>
      </Image>
      <Name>{name}</Name>
      <Price>{price} ₸</Price>
    </Wrap>
  );
};

export default ProductCardOne;
