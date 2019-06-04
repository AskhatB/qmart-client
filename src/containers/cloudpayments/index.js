import React from 'react';

class CloudPayments extends React.Component {
  state = {};

  componentDidMount() {
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = '//widget.cloudpayments.kz/bundles/cloudpayments';
      js.async = true;
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, 'script', 'cp', () => {
      this.payHandle();
    });
  }

  payHandle = () => {
    const widget = new window.cp.CloudPayments();
    const { amount } = this.props.match.params;
    // const { id, email, price } = this.props;
    widget.auth(
      {
        publicId: 'pk_13c33481c8dfd6c79b0c3258177b1', // id из личного кабинета
        description: 'Оплата в QMart', // назначение
        amount: parseInt(amount, 10), // сумма
        currency: 'KZT', // валюта
        invoiceId: 1, // номер заказа  (необязательно)
        accountId: 1, // идентификатор плательщика (необязательно)
        email: '',
        data: {
          productId: 32 // произвольный набор параметров
        }
      },
      options => {
        localStorage.removeItem('_prodcutsInCart');
        window.location = '/success';
      }
    );
  };

  // pk_13c33481c8dfd6c79b0c3258177b1

  render() {
    return <div />;
  }
}

export default CloudPayments;
