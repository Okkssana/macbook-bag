import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';


//import AppContext from '../context';
import { Link } from 'react-router-dom';
import axios from 'axios';



// import Card from '../components/Card/Card';
//import s from './Selected.module.scss';

const Orders = () => {
  const [orders, setOrders] = useState([])
  
//   useEffect(()=>{
//     (async () => {
//       const {data} = await axios.get('https://63c26a00e3abfa59bdace7e9.mockapi.io/orders')
//       console.log(data.map(obj=>obj.items))
//       console.log('data orders')
//       console.log(data);
//       console.log('data');
//       console.log(data.reduce((prev, obj) => [...prev, ...obj.items],[]));
//       console.log('data orders flat');
//       setOrders(data.map((obj) => obj.items));
      
//     })()
//   },[])




  


  //const { orders, orderId } = React.useContext(AppContext);
  const [ isLoading, setIsLoading ] = useState(true);
  // const [orders, setOrders] = useState([]);
  console.log(orders);
  console.log('orders');

  useEffect(() => {
    async function fetchData() {
      try {
        const orderResponse = await axios.get(
          'https://63c26a00e3abfa59bdace7e9.mockapi.io/orders'
        );
        setOrders(orderResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.error(
          'An error occurred while fetching data: ошибка в useEffect Orders',
          error
        );
      }
    }

    fetchData();
  }, []);
  return (
    <div className='content'>
      <div className='contentBox'>
        <h1>My orders</h1>
      </div>

      {
        isLoading ? (
          <>
            <div className='orderTitleBox'>
                <div className='orderTitle'></div>
                <div className='orderTitle'></div>
              </div>
            <div className='cards orderCards'>
              
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
          </>
        ) : orders.length > 0 ? (
          orders.map((obj) => {
            return (
              <div key={obj.id}>
                <div className='orderTitleBox'>
                  <div className='orderTitle'>Order #{obj.id}</div>
                  <div className='orderTitle'>{obj.date}</div>
                </div>
                <div className='cards orderCards'>
                  {obj.items.map((item, i) => {
                    return (
                      <Card
                        {...item}
                        parentId={item.id}
                        key={item.id}
                        display='none'
                        loading={isLoading}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <>
            <div className='noOrdersBox'>
              <img
                className='noOrdersImg'
                src='./images/orders.png'
                alt='img'
              ></img>
              <div className='noOrdersDescr'>No Order Yet</div>
              <div className='noOrdersDescr'>
                But it's never too late to fix it!
              </div>
              <Link className='btn orderBtn' to='/'>
                back to products
              </Link>
            </div>
          </>
        )

        //<>
        //orders.map((obj, i) => {
        //return (

        //<div key={i}>
        //<h2 className='orderTitle'>Order #{i + 1} </h2>
        //<div className='cards orderCards'>
        //{obj.map((item, i) => {
        //return <Card {...item} key={item.id} display='none' />;
        //})}
        //</div>
        //</div>
        //);
        //</div>
      }
    </div>
  );
};

export default Orders;

          
            
            
            
 