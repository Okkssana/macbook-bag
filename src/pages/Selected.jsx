import React, { useState } from 'react'
import Card from '../components/Card/Card';
import { useEffect } from 'react';
import AppContext  from '../context';
import { Link } from 'react-router-dom';



const Selected = ({
  // selectedItems,
  onAddToSelected,
  // items,
  onAddToCart,
  // cartItems,
  cartClosedId,
  deleteFromSelected,
  // selectClosedId,
  isLoading = 'true'
}) => {
  const { cartItems, selectedItems } = React.useContext(AppContext);
  // const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {}, [
    // selectedItems,
    onAddToSelected,
    // items,
    onAddToCart,
    // cartItems,
    cartClosedId,
  ]);

  

  // const renderItems = () => {
   
  //   return (isLoading
  //     ? [...Array(8)]
  //     : selectedItems.map((item, i) => {
  //         return (
  //           <Card
  //             {...item}
  //             // key={item.id}
  //             key={isLoading? i:item.id}
  //             selected={true}
  //             // onSelected={onAddToSelected}
  //             onSelected={deleteFromSelected}
  //             onPlus={(obj) => onAddToCart(obj)}
  //             added={cartItems.some((obj) => obj.parentId === item.parentId)}
  //             cartClosedId={cartClosedId}
  //             // selectClosedId={selectClosedId}
  //           />
  //         );
  //       }));
  // };


  return (
    <div className='content'>
      <div className='contentBox'>
        <h1>My favorite products</h1>
      </div>
      {
        isLoading ? (
            <div className='cards'>
              {[...Array(8)].map((obj, i) => {
                return (
                    <Card
                      {...obj}
                      parentId={i}
                      key={i}
                      display='none'
                      loading={isLoading}
                    />
                );
              })}
                
            </div>
          ) : selectedItems.length > 0 ? (
          <div className='cards'>
            {selectedItems.map((item, i) => {
              
              return (
                <Card
                  {...item}
                  key={item.id}
                  //parentId={i}
                  // key={isLoading? i:item.id}
                  selected={true}
                  // onSelected={onAddToSelected}
                  onSelected={deleteFromSelected}
                  onPlus={(obj) => onAddToCart(obj)}
                  added={cartItems.some((obj) => obj.parentId === item.parentId)}
                  cartClosedId={cartClosedId}
                  // selectClosedId={selectClosedId}
                />
              );
            })
            }
          </div>

         
        
      ) : (
        <>
          <div className='noOrdersBox'>
            <img
              className='noOrdersImg'
              src='./images/favourite.png'
              alt='img'
            ></img>
            <div className='noOrdersDescr'>No Favorite Yet</div>
            <div className='noOrdersDescr'>
              But it's never too late to fix it!
            </div>
            <Link className='btn orderBtn' to='/'>
              back to products
            </Link>
          </div>
        </>
      )}
      
    </div>
  );
};

export default Selected