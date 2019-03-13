import React from 'react';
import { Wrap, Layout } from './style';
import axios from 'axios';
import Header from '../../components/Header';
import ProductCardTwo from '../../components/ProductCardTwo';

const cart = JSON.parse(localStorage.getItem('_prodcutsInCart'));

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      cartItems: cart
    };
  }

  getProductList = () => {
    let cartIds = [];
    for (let i = 0; i < cart.length; i++) {
      cartIds.push(cart[i].id);
    }
    axios.post('/product-list', { cartIds }).then(res => {
      this.setState({ data: res.data, loading: false });
    });
  };

  componentWillMount = () => {
    this.getProductList();
  };

  removeFromCart = index => {
    let cartUpdated = this.state.cartItems;
    cartUpdated.splice(index, 1);
    this.setState({ loading: true, cartItems: cartUpdated });
    localStorage.setItem('_prodcutsInCart', JSON.stringify(cartUpdated));
    this.getProductList();
  };

  render() {
    const { loading, data } = this.state;
    if (loading) return <div />;
    return (
      <Wrap>
        <Header title="Корзина" />
        <Layout>
          {data.map((val, indx) => {
            return (
              <ProductCardTwo
                key={val.id}
                index={indx}
                name={val.name}
                image={JSON.parse(val.images)[0]}
                amount={cart.filter(i => i.id === val.id)[0].amount}
                price={val.price}
                removeFromCart={this.removeFromCart}
              />
            );
          })}
        </Layout>
      </Wrap>
    );
  }
}

export default Cart;
