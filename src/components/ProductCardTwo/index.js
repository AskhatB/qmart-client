import React from 'react';
import {
  Wrap,
  Image,
  Info,
  Name,
  Amount,
  Remove,
  Layout,
  Controls,
  Price
} from './style';

const ProductCardTwo = ({ name, image, amount, price, removeFromCart, index }) => {
  return (
    <Wrap>
      <Layout>
        <Image>
          <img src={image} alt={name} />
        </Image>
        <Info>
          <Name>{name}</Name>
          <Price>{price} ₸</Price>
        </Info>
      </Layout>
      <Controls>
        <Remove onClick={() => removeFromCart(index)}>Удалить</Remove>
        <Amount>Количетво: {amount}</Amount>
      </Controls>
    </Wrap>
  );
};

export default ProductCardTwo;
