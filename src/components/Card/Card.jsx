import ss from './Card.module.scss'

function Card(props) {
  function openCart(params) {
    return alert('Вы нажали на +');
    // document.querySelector('.overlay')
  }
  return (
    <div className={ss.card}>
      <div className={ss.elected}>
        <img src={'/images/chosen-unliked.svg'} alt='unliked' />
      </div>
      <img className={ss.cardImg} src={props.src} alt='bag' />
      <p>{props.name}</p>
      <div className={ss.priceBox}>
        <div>
          <span className={ss.price}>Price:</span>
          <span className={ss.priceValue}>{props.price} UAH</span>
        </div>
        <button onClick={openCart}>
          <img src='images/vector.png' alt='plus' />
        </button>
      </div>
    </div>
  );
}
export default Card;
