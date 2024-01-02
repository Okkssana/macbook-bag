import React, { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import s from './Card.module.scss';

function Card({
  id,
  parentId,
  cartClosedId,
  price,
  name,
  src,
  onSelected,
  onPlus,
  selected = false,
  added = false,
  loading = false,
  display = 'block',
}) {
  // function openCart(params) {
  //   return alert('Вы нажали на +');

  // }

  const [isAdded, setIsAdded] = useState(added);
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    if (cartClosedId === id) {
      setIsAdded(!isAdded);
    }
  }, [cartClosedId]);
  useEffect(() => {
    setIsAdded(added);
  }, [added]);
  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  // console.log(isSelected);
  // console.log('isSelected проверка');

  // const [buttonSrc, setButtonSrc] = useState('images/plus.png');
  const obj = { id, parentId, price, name, src };
  const handlePlusClick = () => {
    setIsAdded(!isAdded);
    onPlus(obj);
  };
  const handleSelectedClick = () => {
    setIsSelected(!isSelected);
    onSelected(obj);
  };
  // const handlePlusClick = ()=>{
  //   setButtonSrc('images/button-chosen.png');
  // }
  return (
    <div className={s.card}>
      {loading ? (
        <ContentLoader
          speed={0}
          width={150}
          height={193}
          viewBox='0 0 150 193'
          backgroundColor='#f2f2f2'
          foregroundColor='#f2f2f2'
        >
          <rect x='114' y='67' rx='0' ry='0' width='0' height='1' />
          <rect x='0' y='0' rx='10' ry='10' width='150' height='90' />
          <rect x='95' y='209' rx='0' ry='0' width='1' height='0' />
          <rect x='35' y='216' rx='0' ry='0' width='0' height='1' />
          <rect x='0' y='115' rx='3' ry='3' width='150' height='15' />
          <rect x='27' y='136' rx='3' ry='3' width='93' height='15' />
          <rect x='0' y='169' rx='8' ry='8' width='80' height='24' />
          <rect x='124' y='169' rx='8' ry='8' width='27' height='24' />
        </ContentLoader>
      ) : (
        <>
          <div className={s.selected} onClick={handleSelectedClick}>
            <img
              src={
                isSelected
                  ? '/images/chosen-liked.png'
                  : '/images/chosen-unliked.png'
              }
              style={{ display }}
              alt='selected'
            />
          </div>
          <img className={s.cardImg} src={src} alt='bag' />
          <p>{name}</p>
          <div className={s.priceBox}>
            <div>
              <span className={s.price}>Price:</span>
              <span className={s.priceValue}>{price} UAH</span>
            </div>
            <button onClick={handlePlusClick}>
              <img
                src={isAdded ? 'images/button-chosen.png' : 'images/plus.png'}
                style={{ display }}
                alt='plus'
              />
            </button>
          </div>
        </>
      )}

      {/* <div className={s.selected} onClick={handleSelectedClick}>
        <img
          src={
            isSelected
              ? '/images/chosen-liked.png'
              : '/images/chosen-unliked.png'
          }
          alt='selected'
        />
      </div>
      <img className={s.cardImg} src={src} alt='bag' />
      <p>{name}</p>
      <div className={s.priceBox}>
        <div>
          <span className={s.price}>Price:</span>
          <span className={s.priceValue}>{price} UAH</span>
        </div>
        <button onClick={handlePlusClick}>
          <img
            src={isAdded ? 'images/button-chosen.png' : 'images/plus.png'}
            alt='plus'
          />
        </button>
      </div> */}
    </div>
  );
}
export default Card;
