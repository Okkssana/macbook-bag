import React from 'react';
import AppContext from '../context';
import { Link } from 'react-router-dom';

const Info = ({ title, image, description }) => {
  const { setCartOpened, isOrderAccepted, setIsOrderAccepted, orderId } =
    React.useContext(AppContext);
  
  return (
    <div className='drawerEmpty'>
      {/* <img className={s.drawerEmptyImg} src='./images/cart-empty.png' alt='' /> */}
      <img
        className='drawerEmptyImg'
        style={{
          width: isOrderAccepted ? 50 : 100,
          height: isOrderAccepted ? 50 : 100,
        }}
        src={image}
        alt=''
      />
      {/* <h3 className={s.drawerEmptyTitle}>The basket is empty</h3>
      <p>But it's never too late to fix it!</p> */}
      {isOrderAccepted ? (
        <h3 className='drawerEmptyTitle'>Order No.{orderId}</h3>
      ) : null}

      <h3 className='drawerEmptyTitle'>{title}</h3>
      <p className='drawerEmptyDescription'>{description}</p>
      {/* <button
        className='btn'
        onClick={() => {
          setCartOpened(false);
          setIsOrderAccepted(false);
        }}
      >
        back to products
      </button> */}
      <Link
        className='btn'
        to='/'
        onClick={() => {
          setCartOpened(false);
          setIsOrderAccepted(false);
        }}
      >
        back to products
      </Link>
    </div>
  );
};

export default Info;
