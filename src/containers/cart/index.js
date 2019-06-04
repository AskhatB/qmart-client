import React from 'react';
import { Wrap, Layout, Buy } from './style';
import axios from 'axios';
import Header from '../../components/Header';
import ProductCardTwo from '../../components/ProductCardTwo';
import { Link } from 'react-router-dom';

const cart = JSON.parse(localStorage.getItem('_prodcutsInCart'));

class Cart extends React.Component {
  state = {
    data: null,
    loading: true,
    cartItems: cart,
    forceUpdate: false
  };

  totalPrice = () => {
    let total = 0;
    this.state.data.forEach(val => {
      const current = cart.find(i => i.id === parseInt(val.barcode_id, 10))
        .amount;
      total += val.price * current;
    });
    this.setState({
      total: total
    });
  };

  getProductList = () => {
    if (cart) {
      let cartIds = [];
      for (let i = 0; i < cart.length; i++) {
        cartIds.push(cart[i].id);
      }
      const partnerId = JSON.parse(localStorage.getItem('qmart::partner_id'));
      axios
        .post('/product-list', { cartIds, sup_id: partnerId.qmart_partner_id })
        .then(res => {
          this.setState({ data: res.data, loading: false });
          this.totalPrice();
        })
        .catch(error => {
          this.setState({ loading: false, empty: true });
        });
    } else {
      this.setState({ loading: false, empty: true });
    }
  };

  componentWillMount = () => {
    this.getProductList();
  };

  componentDidMount = () => {
    this.setState({ forceUpdate: !this.state.forceUpdate });
  };

  removeFromCart = index => {
    let cartUpdated = this.state.cartItems;
    cartUpdated.splice(index, 1);
    this.setState({ loading: true, cartItems: cartUpdated });
    localStorage.setItem('_prodcutsInCart', JSON.stringify(cartUpdated));
    this.getProductList();
  };

  render() {
    const { loading, data, total } = this.state;
    if (loading) return <div />;
    return (
      <Wrap>
        <Header title="Корзина" />
        {this.state.empty ? (
          <div>Пусто</div>
        ) : (
          <>
            <Layout>
              {data.map((val, indx) => {
                return (
                  <ProductCardTwo
                    key={val.id}
                    index={indx}
                    name={val.name}
                    image={JSON.parse(val.images)[0]}
                    amount={
                      cart.filter(i => i.id === parseInt(val.barcode_id, 10))[0]
                        .amount
                    }
                    price={val.price}
                    removeFromCart={this.removeFromCart}
                  />
                );
              })}
            </Layout>
            <Link to={`/payment/${total}`}>
              <Buy>Оплатить ({total}тг)</Buy>
            </Link>
          </>
        )}
      </Wrap>
    );
  }
}

export default Cart;
