import React from 'react'
import Card from '../components/Card/Card';
import AppContext from '../context';
// import s from './Home.module.scss';
 
function Home({
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  // items,
  onAddToSelected,
  onAddToCart,
  // cartItems,
  cartClosedId,
  // selectClosedId,
  // selectedItems,
  isLoading
}) {
  // console.log(items);
  // console.log('items что за айтемз');
  // console.log(selectedItems);
  // console.log('selectedItems');
  const { items, selectedItems, cartItems } = React.useContext(AppContext);
  const renderItems =()=>{
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
      isLoading
        ? [...Array(8)]
        : filtredItems
    ).map((item, i) => {
    //  console.log(items)
    //  console.log('items')
    //  console.log(cartItems);
    //  console.log('cartItems');
     
     
      
      return (
        <Card
          // src={item.src}
          // name={item.name}
          // price={item.price}
          {...item}
          parentId={isLoading ? i : item.id}
          key={isLoading ? i : item.id}
          onSelected={(obj) => onAddToSelected(obj)}
          onPlus={(obj) => onAddToCart(obj)}
          added={cartItems.some((obj) => obj.parentId === item.id)}
          selected={selectedItems.some((obj) => obj.parentId === item.id)}
          cartClosedId={cartClosedId}
          // selectedItems={selectedItems}
          loading={isLoading}
          // selectClosedId={selectClosedId}
        />
      );
    });
    
  }

  return (
    <div className='content'>
      <div className='contentBox'>
        <h1>{searchValue ? `Search "${searchValue}"` : 'All bags'}</h1>

        <div className='search-block'>
          <img src='/images/search.png' alt='search' />
          {searchValue && (
            <img
              className='clear'
              src='/images/close.png'
              alt='clear'
              onClick={() => setSearchValue('')}
            />
          )}
          <input
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>
      <div className='cards'>{renderItems()}</div>
    </div>
  );
};

export default Home