function Drawer() {
  return (
    <div className='drawer'>
      <h2>
        Cart
        <img className='closeBtn' src='/images/close.svg' alt='closeBtn' />
      </h2>

      <div className='drawerItems'>
        <div className='drawerItem'>
          <img className='drawerImg' src='./images/bags/2.jpg' alt='bag' />
          <div>
            <p>MacBook bag Cactus</p>
            <span className='priceValue'>850 UAH</span>
          </div>
          <img className='closeBtn' src='/images/close.svg' alt='closeBtn' />
        </div>
        <div className='drawerItem'>
          <img className='drawerImg' src='./images/bags/4.jpg' alt='bag' />
          <div>
            <p>MacBook bag Spacecraft</p>
            <span className='priceValue'>850 UAH</span>
          </div>
          <img className='closeBtn' src='/images/close.svg' alt='closeBtn' />
        </div>
      </div>

      <div className='drawerTotal'>
        <div className='drawerTotalItem'>
          <p>Total:</p>
          <p className='drawerPrice'>
            1700<span>UAH</span>
          </p>
        </div>
        <button className='btn'>checkout</button>
      </div>
    </div>
  );
}

export default Drawer;