function Card (props) {
  return (
    <div className='card'>
      <div className='elected'>
        <img src={'/images/chosen-unliked.svg'} alt='unliked' />
      </div>
      <img className='cardImg' src={props.src} alt='bag' />
      <p>{props.name}</p>
      <div className='price-box'>
        <div>
          <span className='price'>Price:</span>
          <span className='priceValue'>{props.price} UAH</span>
        </div>
        <button>
          <img src='images/vector.png' alt='plus' />
        </button>
      </div>
    </div>
  );
}
export default Card;