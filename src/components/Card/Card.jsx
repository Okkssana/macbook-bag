import React, { useState } from 'react';
import s from './Card.module.scss'

function Card(props) {
  // function openCart(params) {
  //   return alert('Вы нажали на +');
    
  // }
  const [isAdded, setIsAdded] = useState(false);
  const [isElected, setIsElected] = useState(false);
  // const [buttonSrc, setButtonSrc] = useState('images/plus.png');
  
  const handlePlusClick = ()=>{
    setIsAdded(!isAdded);
  }
  const handleElectedClick = () => {
    setIsElected(!isElected);
  };
  // const handlePlusClick = ()=>{
  //   setButtonSrc('images/button-chosen.png');
  // }
  return (
    <div className={s.card}>
      <div className={s.elected} onClick={handleElectedClick}>
        <img src={isElected ? "/images/chosen-liked.png" : "/images/chosen-unliked.png"} alt='unliked' />
      </div>
      <img className={s.cardImg} src={props.src} alt='bag' />
      <p>{props.name}</p>
      <div className={s.priceBox}>
        <div>
          <span className={s.price}>Price:</span>
          <span className={s.priceValue}>{props.price} UAH</span>
        </div>
        <button onClick={handlePlusClick}>
          <img
            src={isAdded ? 'images/button-chosen.png' : 'images/plus.png'}
            alt='plus'
          />
        </button>
      </div>
    </div>
  );
}
export default Card;
