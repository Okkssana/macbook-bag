import React from 'react';
import axios from 'axios';

import AppContext from '../../context';
import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import s from './Drawer.module.scss';


//delay делается для того, чтобы не заблокировал мокапи
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ closeDrawer, onRemove, opened }) {
  // const [isOrderAccepted, setIsOrderAccepted] = useState(false);
  const {
    //cartItems,
    //setCartItems,
    isOrderAccepted,
    setIsOrderAccepted,
    setOrderId,
    currentFormattedDate,
  } = React.useContext(AppContext);
  // const [isLoading, setIsLoading] = useState(false);
  const { cartItems, setCartItems, totalPrice } = useCart();

  const onClickOrder = async () => {
    try {
      // setIsLoading(true);
      const { data } = await axios.post(
        'https://63c26a00e3abfa59bdace7e9.mockapi.io/orders',
        { items: cartItems, date: currentFormattedDate  }
      );
      console.log(data);
      console.log('data');
      //в мокапи нельзя сразу очистить через put, поэтому используем костыль for delay
      //await axios.put('https://63b598850f49ecf508aa5838.mockapi.io/cart', []);
      setIsOrderAccepted(true);
      setCartItems([]);
      setOrderId(data.id);
      //вместо axios.put делаем:
      for(let i =0; i < cartItems.length; i++){
        const item = cartItems[i];
        await axios.delete('https://63b598850f49ecf508aa5838.mockapi.io/cart/' + item.id);
        await delay(1000)
      }
      
    } catch (error) {
      console.error(
        'An error occurred while fetching data: onClickOrder',
        error
      );
    }
    // setIsLoading(false);
  };
  const onCartCloseClick = () => {
    closeDrawer();
    setIsOrderAccepted(false);
  };
  // let totalPrice = 0;
  // console.log(cartItems.length);
  // console.log('cartItems.length');

  // for (let i = 0; i < cartItems.length; i++) {
  //   totalPrice += cartItems[i].price;
  // }
  // const totalPrice = cartItems.reduce((sum, obj)=> obj.price + sum, 0)

  return (
    <div className={`${s.overlay} ${opened ? s.overlayVisible : '' }`}>
      <div className={s.drawer}>
        <h2>
          Cart
          <img
            className={s.closeBtn}
            src='/images/close.svg'
            alt='closeBtn'
            onClick={onCartCloseClick}
          />
        </h2>
        {cartItems.length > 0 ? (
          <div className={s.drawerItemsBox}>
            <div className={s.drawerItems}>
              {cartItems.map((obj) => (
                <div className={s.drawerItem} key={obj.id}>
                  <img className={s.drawerImg} src={obj.src} alt='bag' />
                  <div>
                    <p>{obj.name}</p>
                    <span className={s.priceValue}>{obj.price} UAH</span>
                  </div>
                  <img
                    className={s.closeBtn}
                    src='/images/close.svg'
                    alt='closeBtn'
                    onClick={() => onRemove(obj.id, obj.parentId)}
                  />
                </div>
              ))}
            </div>
            <div className={s.drawerTotal}>
              <div className={s.drawerTotalItem}>
                <p>Total:</p>
                {/* <p className={s.drawerPrice}>
                  1700<span>UAH</span>
                </p> */}
                <p className={s.drawerPrice}>
                  {totalPrice}
                  <span>UAH</span>
                </p>
              </div>
              <button
                className='btn'
                onClick={onClickOrder}
              >
                checkout
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={
              isOrderAccepted ? 'Your order is accepted' : 'The basket is empty'
            }
            description={
              isOrderAccepted
                ? "We'll be in touch soon!"
                : "But it's never too late to fix it!"
            }
            image={
              isOrderAccepted ? './images/tick.png' : './images/cart-empty.png'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
