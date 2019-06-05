import React from 'react';
import { Wrap, Title, Controls, IconWrap, Separator } from './style';
import BackIcon from '../../icons/back';
import CartIcon from '../../icons/cart';
import ProfileIcon from '../../icons/profile';
import { history } from '../../history';
import { Link } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <Wrap>
      {title === 'Товар' ? (
        <Link to="/product-scanner" style={{ display: 'block', width: '72px' }}>
          <IconWrap>
            <BackIcon />
          </IconWrap>
        </Link>
      ) : (
        <IconWrap onClick={() => history.goBack()}>
          <BackIcon />
        </IconWrap>
      )}

      <Title>{title}</Title>
      <Controls>
        {title !== 'Профиль' && (
          <>
            <a href="/cart">
              <CartIcon width="24px" />
            </a>
            <Separator />
            <Link to="/profile">
              <ProfileIcon />
            </Link>
          </>
        )}
      </Controls>
    </Wrap>
  );
};

export default Header;
