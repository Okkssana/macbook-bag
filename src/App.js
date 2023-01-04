import React, { useState } from 'react';
import Card from './components/Card/Card';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';

const arr = [
  {
    name: 'MacBook bag Black Maple leaf',
    price: 850,
    src: './images/bags/1.jpg',
  },
  { name: 'MacBook bag Cactus', price: 950, src: './images/bags/2.jpg' },
  {
    name: 'MacBook bag Yellow chrysanthemum',
    price: 850,
    src: './images/bags/3.jpg',
  },
  { name: 'MacBook bag Spacecraft', price: 950, src: './images/bags/4.jpg' },
  {
    name: 'MacBook bag Blue Forest',
    price: 950,
    src: './images/bags/5.jpg',
  },
  {
    name: 'MacBook bag Eichhornia',
    price: 950,
    src: './images/bags/6.jpg',
  },
  {
    name: 'MacBook bag Banana Leaf',
    price: 800,
    src: './images/bags/7.jpg',
  },
  {
    name: 'MacBook bag White Small Fresh',
    price: 850,
    src: './images/bags/8.jpg',
  },
  {
    name: 'MacBook bag Black',
    price: 900,
    src: './images/bags/9.jpg',
  },
  {
    name: 'MacBook bag Flower Arrangement',
    price: 900,
    src: './images/bags/10.jpg',
  },
  {
    name: 'MacBook bag Black Plant',
    price: 800,
    src: './images/bags/11.jpg',
  },
  {
    name: 'MacBook bag Painted',
    price: 850,
    src: './images/bags/12.jpg',
  },
  {
    name: 'MacBook bag Small Blue Flower',
    price: 950,
    src: './images/bags/13.jpg',
  },
  {
    name: 'MacBook bag Starry Sky',
    price: 850,
    src: './images/bags/14.jpg',
  },
  {
    name: 'MacBook bag Flower Arrangement 2',
    price: 800,
    src: './images/bags/15.jpg',
  },
  {
    name: 'MacBook bag Red Bohemia',
    price: 950,
    src: './images/bags/16.jpg',
  },
  {
    name: 'MacBook bag Seaweed',
    price: 950,
    src: './images/bags/17.jpg',
  },
  {
    name: 'MacBook bag Herbaceous Flower',
    price: 850,
    src: './images/bags/18.jpg',
  },
  {
    name: 'MacBook bag White Plant',
    price: 850,
    src: './images/bags/19.jpg',
  },
  {
    name: 'MacBook bag Blue Snowflaker',
    price: 850,
    src: './images/bags/20.jpg',
  },
  {
    "name": "MacBook bag Black Maple leaf",
    "price": 850,
    "src": "./images/bags/1.jpg"
  },
  { "name": "MacBook bag Cactus", "price": 950, "src": "./images/bags/2.jpg" },
  {
    "name": "MacBook bag Yellow chrysanthemum",
    "price": 850,
    "src": "./images/bags/3.jpg"
  },
  { "name": "MacBook bag Spacecraft", "price": 950, "src": "./images/bags/4.jpg" },
  {
    "name": "MacBook bag Blue Forest",
    "price": 950,
    "src": "./images/bags/5.jpg"
  },
  {
    "name": "MacBook bag Eichhornia",
    "price": 950,
    "src": "./images/bags/6.jpg"
  },
  {
    "name": "MacBook bag Banana Leaf",
    "price": 800,
    "src": "./images/bags/7.jpg"
  },
  {
    "name": "MacBook bag White Small Fresh",
    "price": 850,
    "src": "./images/bags/8.jpg"
  },
  {
    "name": "MacBook bag Black",
    "price": 900,
    "src": "./images/bags/9.jpg"
  },
  {
    "name": "MacBook bag Flower Arrangement",
    "price": 900,
    "src": "./images/bags/10.jpg"
  },
  {
    "name": "MacBook bag Black Plant",
    "price": 800,
    "src": "./images/bags/11.jpg"
  },
  {
    "name": "MacBook bag Painted",
    "price": 850,
    "src": "./images/bags/12.jpg"
  },
  {
    "name": "MacBook bag Small Blue Flower",
    "price": 950,
    "src": "./images/bags/13.jpg"
  },
  {
    "name": "MacBook bag Starry Sky",
    "price": 850,
    "src": "./images/bags/14.jpg"
  },
  {
    "name": "MacBook bag Flower Arrangement 2",
    "price": 800,
    "src": "./images/bags/15.jpg"
  },
  {
    "name": "MacBook bag Red Bohemia",
    "price": 950,
    "src": "./images/bags/16.jpg"
  },
  {
    "name": "MacBook bag Seaweed",
    "price": 950,
    "src": "./images/bags/17.jpg"
  },
  {
    "name": "MacBook bag Herbaceous Flower",
    "price": 850,
    "src": "./images/bags/18.jpg"
  },
  {
    "name": "MacBook bag White Plant",
    "price": 850,
    "src": "./images/bags/19.jpg"
  },
  {
    "name": "MacBook bag Blue Snowflaker",
    "price": 850,
    "src": "./images/bags/20.jpg"
  }
];


function App() {
  const [cartOpened, setCartOpened] = useState(false);
  // const [drawerBtn, setDrawerBtn] = useState(true);
  
  return (
    <div className='App'>
      {cartOpened && (
        <Drawer
          closeDrawer={() => {
            setCartOpened(false);
          }}
        />
      )}
      <Header
        onCartClick={() => {
          setCartOpened(true);
        }}
      />
      <div className='content'>
        <div className='contentBox'>
          <h1>All bags</h1>

          <div className='search-block'>
            <img src='/images/search.png' alt='search' />
            <input type='text' placeholder='Search' />
          </div>
        </div>
        <div className='cards'>
          {arr.map((obj, i) => {
            return (
              <Card
                src={obj.src}
                name={obj.name}
                price={obj.price}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
