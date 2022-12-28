import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.headerLeft}>
        <img className={s.logo} src='/images/bag1.svg' alt='logo' />
        <div className={s.headerInfo}>
          <h3>Kinmac</h3>
          <p>MacBook bag</p>
        </div>
      </div>
      <ul className={s.headerRight}>
        <li className={s.navLeft}>
          <img className={s.cart} src='/images/cart.svg' alt='cart' />
          <span>1700 UAH</span>
        </li>
        <li className={s.navRight}>
          <img className={s.chosen} src='/images/chosen.png' alt='chosen' />
          <img className={s.user} src='/images/user.png' alt='user' />
        </li>
      </ul>
    </header>
  );
}

export default Header;
