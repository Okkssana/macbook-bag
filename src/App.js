import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Selected from './pages/Selected';
import Home from './pages/Home';
import AppContext from './context';
import Orders from './pages/Orders';

// export const AppContext = createContext({});
// console.log(AppContext);

function App() {
  function getCurrentFormattedDate() {
    const currentDate = new Date();

    // Извлекаем компоненты даты
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Месяцы в JavaScript начинаются с 0
    const year = currentDate.getFullYear();
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    // Собираем строку в нужном формате
    const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}`;
    return formattedDate;
  }
  // Получаем текущую отформатированную дату и время
  const currentFormattedDate = getCurrentFormattedDate();
  // Выводим результат
  console.log(currentFormattedDate);

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  //const [orders, setOrders] = useState([]);
  // const [isInCart, setIsInCart] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [cartOpened, setCartOpened] = useState(false);
  const [isOrderAccepted, setIsOrderAccepted] = useState(false);
  const [cartClosedId, setCartClosedId] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  console.log(cartItems);
  console.log(JSON.stringify(cartItems));
  console.log('cartItems');

  // const [drawerBtn, setDrawerBtn] = useState(true);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsLoading(true);
  //     const cartResponse = await axios.get(
  //       'https://63b598850f49ecf508aa5838.mockapi.io/cart'
  //     );

  //     const selectedResponse = await axios.get(
  //       'https://63c26a00e3abfa59bdace7e9.mockapi.io/selected'
  //     );
  //     const itemsResponse = await axios.get(
  //       'https://63b598850f49ecf508aa5838.mockapi.io/items'
  //     );
  //     setIsLoading(false);
  //     setCartItems(cartResponse.data);
  //     setSelectedItems(selectedResponse.data);
  //     setItems(itemsResponse.data);
  //   }
  //   fetchData()
  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const [cartResponse, selectedResponse, itemsResponse ] =
          await Promise.all([
            axios.get('https://63b598850f49ecf508aa5838.mockapi.io/cart'),
            axios.get('https://63c26a00e3abfa59bdace7e9.mockapi.io/selected'),
            axios.get('https://63b598850f49ecf508aa5838.mockapi.io/items'),
          ]);
          

        setCartItems(cartResponse.data);
        setSelectedItems(selectedResponse.data);
        //setOrders(orderResponse.data);
        //console.log(orderResponse.data);
        console.log('orderResponse.data');
        setItems(itemsResponse.data);
      } catch (error) {
        console.error(
          'An error occurred while fetching data: ошибка в App.js',
          error
        );
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  //убрала finally {setIsLoading(false)} из-за него подвисала загрузка home
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const orderResponse = await axios.get(
  //         'https://63c26a00e3abfa59bdace7e9.mockapi.io/orders'
  //       );
  //       setOrders(orderResponse.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error(
  //         'An error occurred while fetching data: ошибка в useEffect Orders',
  //         error
  //       );
  //     }
  //   }

  //   fetchData();
  // }, [orderId]);

  const onAddToCart = async (obj) => {
    console.log(obj);
    console.log('obj');
    console.log(items);
    console.log('items');

    console.log(cartItems);
    console.log('cartItems');
    console.log(selectedItems);
    console.log('selectedItems');

    try {
      const findItem = cartItems.find(
        (cartItem) => Number(cartItem.parentId) === Number(obj.parentId)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.parentId))
        );
        await axios
          .delete(
            `https://63b598850f49ecf508aa5838.mockapi.io/cart/${findItem.id}`
          )
          .then((res) => console.log(res.data), console.log('res.data'));
        
        console.log('ho');
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://63b598850f49ecf508aa5838.mockapi.io/cart',
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
      console.log('he');
    } catch (error) {
      console.error(
        'An error occurred while fetching data: onAddToCart',
        error
      );
    }
  };
  //в onRemoveCartItem убрала async await из-за него тормозило удаление товаров из корзины
  const onRemoveCartItem = async (id, parentId) => {
    try {
      setCartItems((prev) => prev.filter((item) => item.id !== id));
      setCartClosedId(parentId);
      await axios.delete(`https://63b598850f49ecf508aa5838.mockapi.io/cart/${id}`);
    } catch (error) {
      console.error(
        'An error occurred while fetching data: onRemoveCartItem',
        error
      );
    }
  };
  const onAddToSelected = async (obj) => {
    try {
      const findItem = selectedItems.find(
        (favObj) => Number(favObj.parentId) === Number(obj.id)
      );
      if (findItem) {
        await axios.delete(
          `https://63c26a00e3abfa59bdace7e9.mockapi.io/selected/${findItem.id}`
        );
        setSelectedItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
      } else {
        setSelectedItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://63c26a00e3abfa59bdace7e9.mockapi.io/selected',
          obj
        );
        setSelectedItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.error(
        'An error occurred while fetching data: onAddToSelected',
        error
      );
    }
  };
  const deleteFromSelected =  async (obj) => {
    try {
      setSelectedItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
       await axios.delete(
        `https://63c26a00e3abfa59bdace7e9.mockapi.io/selected/${obj.id}`
      );
    } catch (error) {
      console.error(
        'An error occurred while fetching data: deleteFromSelected',
        error
      );
    }
  };
  // const onAddToSelected = async (obj) => {
  //   try {
  //     const findItem = selectedItems.find(
  //       (favObj) => Number(favObj.parentId) === Number(obj.id)
  //     );
  //     if (findItem) {
  //       axios.delete(
  //         `https://63c26a00e3abfa59bdace7e9.mockapi.io/selected/${findItem.id}`
  //       );
  //       setSelectedItems((prev) =>
  //         prev.filter((item) => Number(item.id) !== Number(findItem.id))
  //       );
  //     } else {
  //       setSelectedItems((prev) => [...prev, obj]);
  //       const { data } = await axios.post(
  //         'https://63c26a00e3abfa59bdace7e9.mockapi.io/selected',
  //         obj
  //       );
  //       setSelectedItems((prev) =>
  //         prev.map((item) => {
  //           if (item.parentId === data.parentId) {
  //             return {
  //               ...item,
  //               id: data.id,
  //             };
  //           }
  //           return item;
  //         })
  //       );

  //       console.log(data);
  //       console.log('data');
  //     }
  //   } catch (error) {
  //     alert('Не удалось добавить в избраные');
  //   }

  //   // axios
  //   //   .post('https://63c26a00e3abfa59bdace7e9.mockapi.io/selected', obj)
  //   //   .then((res) =>
  //   //     setSelectedItems((prev) => [...prev, res.data], console.log(res))
  //   //   );
  // };

  function onChangeSearchInput(event) {
    setSearchValue(event.target.value);
  }
  console.log(isOrderAccepted);
  console.log('isOrderAccepted');
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        selectedItems,
        setCartOpened,
        setCartItems,
        isOrderAccepted,
        setIsOrderAccepted,
        orderId,
        setOrderId,
        //orders,
        currentFormattedDate,
      }}
    >
      <div className='App'>
        {/* {cartOpened && (
          <Drawer
            closeDrawer={() => {
              setCartOpened(false);
            }}
            cartItems={cartItems}
            onRemove={onRemoveCartItem}
          />
        )} */}
        <Drawer
          closeDrawer={() => {
            setCartOpened(false);
          }}
          cartItems={cartItems}
          onRemove={onRemoveCartItem}
          opened={cartOpened}
        />
        <Header
          onCartClick={() => {
            setCartOpened(true);
          }}
        />

        <Routes>
          <Route
            path='/'
            exact
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                // items={items}
                onAddToSelected={onAddToSelected}
                onAddToCart={onAddToCart}
                // cartItems={cartItems}
                cartClosedId={cartClosedId}
                // selectClosedId={selectClosedId}
                // selectedItems={selectedItems}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/selected'
            element={
              <Selected
                // selectedItems={selectedItems}
                onAddToSelected={onAddToSelected}
                // items={items}
                onAddToCart={onAddToCart}
                // cartItems={cartItems}
                cartClosedId={cartClosedId}
                deleteFromSelected={deleteFromSelected}
                // selectClosedId={selectClosedId}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path='/orders'
            element={
              <Orders
                onAddToSelected={onAddToSelected}
                onAddToCart={onAddToCart}
                cartClosedId={cartClosedId}
                deleteFromSelected={deleteFromSelected}
              />
            }
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
