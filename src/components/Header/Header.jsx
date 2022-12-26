function Header() {
  return (
    <header className='header'>
      <div className='headerLeft'>
        <img className='logo' src='/images/bag1.svg' alt='logo' />
        <div className='headerInfo'>
          <h3>Kinmac</h3>
          <p>MacBook bag</p>
        </div>
      </div>
      <ul className='headerRight'>
        <li className='navLeft'>
          <img className='cart' src='/images/cart.svg' alt='cart' />
          <span>1700 UAH</span>
        </li>
        <li className='navRight'>
          <img className='chosen' src='/images/chosen.png' alt='chosen' />
          <img className='user' src='/images/user.png' alt='user' />
        </li>
      </ul>
    </header>
  );
}

export default Header;