import React from 'react';
import axios from 'axios';
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
    amount: 1,
    product: null,
    loadingProduct: true,
    loadingOffer: true,
    price: 0
  };

  cartStatus = () => {
    const cart = JSON.parse(localStorage.getItem('_prodcutsInCart'));
    const isInCart = cart.find(
      x => x.id === parseInt(this.props.match.params.id, 10)
    );
    if (isInCart) {
      this.setState({
        amount: isInCart.amount
      });
    }
  };

  componentDidMount = () => {
    this.cartStatus();
    axios
      .post('/product-by-barcode', {
        barcode: this.props.match.params.id,
        sup_id: 1
      })
      .then(res => {
        this.setState({ product: res.data, loadingProduct: false });
      });
    axios
      .post('/offer-by-barcode', {
        barcode: this.props.match.params.id,
        sup_id: 1
      })
      .then(res => {
        console.log('OFFER BY BARCODE: \n', res.data);
        const { price } = res.data;
        this.setState({
          price: price,
          loadingOffer: false
        });
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
      localStorage.setItem('_prodcutsInCart', `[{"id": ${id},"amount":1}]`);
    }
    this.setState({
      amount: this.state.amount + 1
    });
  };

  render() {
    const { product, loadingProduct, loadingOffer, price, amount } = this.state;
    if (loadingProduct || loadingOffer) return <div />;
    return (
      <Wrap>
        <Header title="Товар" />
        <Layout>
          <BrandName>{product.brand}</BrandName>
          <ProductName>{product.name}</ProductName>
          <ProductImage>
            <img src={JSON.parse(product.images)[0]} alt="product" />
          </ProductImage>
          <Price>{price} ₸</Price>
          <BuyingBlock>
            <SelectAmount text={amount} />
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
        {/* <Watched>
          {products.map(val => (
            <ProductCardOne {...val} />
          ))}
        </Watched> */}
      </Wrap>
    );
  }
}

export default Product;
