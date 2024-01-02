import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { useCart } from '../../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className={s.header}>
      <Link to='/'>
        <div className={s.headerLeft}>
          <img className={s.logo} src='/images/bag1.svg' alt='logo' />
          <div className={s.headerInfo}>
            <h3>Kinmac</h3>
            <p>MacBook bag</p>
          </div>
        </div>
      </Link>
      <ul className={s.headerRight}>
        <li className={s.navLeft} onClick={props.onCartClick}>
          <img className={s.cart} src='/images/cart.svg' alt='cart' />
          <span>{totalPrice} UAH</span>
        </li>
        <li className={s.navRight}>
          <Link to='selected'>
            <img
              className={s.chosen}
              src='/images/chosen.svg'
              alt='/selected'
            />
          </Link>
          <Link to='orders'>
            <img className={s.user} src='/images/user.png' alt='user' />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
