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
];

function App() {
  return (
    <div className='App'>
      <div className='overlay'>
        <Drawer />
      </div>
      <Header />
      <div className='content'>
        <div className='contentBox'>
          <h1>All bags</h1>

          <div className='search-block'>
            <img src='/images/search.png' alt='search' />
            <input type='text' placeholder='Search' />
          </div>
        </div>
        <div className='cards'>
          {/* <Card
            src={'./images/bags/1.jpg'}
            name={'MacBook bag Black Maple leaf'}
            price={850}
          /> */}
          {arr.map(obj => {
            return (
              <Card
            src={obj.src}
            name={obj.name}
            price={obj.price} />
            )
          })}
          {/* <Card
            src={'./images/bags/2.jpg'}
            name={'MacBook bag Cactus'}
            price={850}
          />
          <Card
            src={'./images/bags/3.jpg'}
            name={'MacBook bag Yellow chrysanthemum'}
            price={850}
          />
          <Card
            src={'./images/bags/4.jpg'}
            name={'MacBook bag Spacecraft'}
            price={950}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
