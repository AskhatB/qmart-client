import React from 'react';
import {
  Wrap,
  Layout,
  BrandName,
  ProductName,
  ProductImage,
  Price,
  BuyingBlock,
  Watched
} from './style';
import Header from '../../components/Header';
import Button from '../../components/Button';
import CartIcon from '../../icons/cart';
import SelectAmount from '../../components/SelectAmount';
import ProductCardOne from '../../components/ProductCardOne';
import { products } from './data';

class Product extends React.Component {
  state = {
    amount: 1
  };
  amountHandler = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({ amount: value });
  };
  render() {
    return (
      <Wrap>
        <Header title="Товар" />
        <Layout>
          <BrandName>Foodmaster</BrandName>
          <ProductName>Молоко Lactel 1л. 2,5%</ProductName>
          <ProductImage>
            <img
              src="https://img2.zakaz.ua/20180801.1533110205.ad72436478c_2018-08-01_Ucat/20180801.1533110205.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg"
              alt="product"
            />
          </ProductImage>
          <Price>350 ₸</Price>
          <BuyingBlock>
            <SelectAmount
              active={this.state.amount}
              text={this.state.amount}
              options={[1, 2, 3, 4]}
              onChange={this.amountHandler}
            />
            <Button
              color="#3b88c3"
              fontColor="#fff"
              width="max-content"
              height="35px"
            >
              <CartIcon />В корзину
            </Button>
          </BuyingBlock>
        </Layout>
        <Watched>
          {products.map(val => (
            <ProductCardOne {...val} />
          ))}
        </Watched>
      </Wrap>
    );
  }
}

export default Product;
