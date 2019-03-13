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
import axios from 'axios';
import { products } from './data';
//https://cors-anywhere.herokuapp.com/
class Product extends React.Component {
  state = {
    amount: 1,
    product: null,
    loading: true
  };

  componentWillMount = () => {
    axios.post('/product', { id: this.props.match.params.id }).then(res => {
      this.setState({ product: res.data, loading: false });
    });
  };

  amountHandler = e => {
    const { value } = e.target;
    console.log(value);
    this.setState({ amount: value });
  };

  addProductToCart = () => {
    const id = parseInt(this.props.match.params.id, 10);
    if (localStorage.getItem('_prodcutsInCart')) {
      let cartUpdated = JSON.parse(localStorage.getItem('_prodcutsInCart'));
      if (cartUpdated.filter(i => i.id === id).length > 0) {
        const current = cartUpdated.filter(i => i.id === id)[0];
        cartUpdated[cartUpdated.indexOf(current)] = {
          id: id,
          amount: current.amount + 1
        };
        localStorage.setItem('_prodcutsInCart', JSON.stringify(cartUpdated));
      } else {
        cartUpdated.push({ id: id, amount: 1 });
        localStorage.setItem('_prodcutsInCart', JSON.stringify(cartUpdated));
      }
    } else {
      localStorage.setItem(
        '_prodcutsInCart',
        `[{"id": ${id},"amount":1}]`
      );
    }
  };

  render() {
    const { product, loading } = this.state;
    if (loading) return <div />;
    return (
      <Wrap>
        <Header title="Товар" />
        <Layout>
          <BrandName>{product.brand}</BrandName>
          <ProductName>{product.name}</ProductName>
          <ProductImage>
            <img src={JSON.parse(product.images)[0]} alt="product" />
          </ProductImage>
          <Price>{product.price} ₸</Price>
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
              onClick={this.addProductToCart}
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
