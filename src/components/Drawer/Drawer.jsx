import s from './Drawer.module.scss';

function Drawer() {
  return (
    <div className={s.drawer}>
      <h2>
        Cart
        <img className={s.closeBtn} src='/images/close.svg' alt='closeBtn' />
      </h2>

      <div className={s.drawerItems}>
        <div className={s.drawerItem}>
          <img className={s.drawerImg} src='./images/bags/2.jpg' alt='bag' />
          <div>
            <p>MacBook bag Cactus</p>
            <span className={s.priceValue}>850 UAH</span>
          </div>
          <img className={s.closeBtn} src='/images/close.svg' alt='closeBtn' />
        </div>
        <div className={s.drawerItem}>
          <img className={s.drawerImg} src='./images/bags/4.jpg' alt='bag' />
          <div>
            <p>MacBook bag Spacecraft</p>
            <span className={s.priceValue}>850 UAH</span>
          </div>
          <img className={s.closeBtn} src='/images/close.svg' alt='closeBtn' />
        </div>
      </div>

      <div className={s.drawerTotal}>
        <div className={s.drawerTotalItem}>
          <p>Total:</p>
          <p className={s.drawerPrice}>
            1700<span>UAH</span>
          </p>
        </div>
        <button className='btn'>checkout</button>
      </div>
    </div>
  );
}

export default Drawer;
