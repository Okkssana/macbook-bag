
function App() {
  return (
    <div className='App'>
      <div className='overlay'>
        <div className='drawer'>
          <h2>
            Cart
            <img className='closeBtn' src='/images/close.svg' alt='closeBtn' />
          </h2>

          <div className='drawerItems'>
            <div className='drawerItem'>
              <img className='drawerImg' src='./images/bags/2.jpg' alt='bag' />
              <div>
                <p>MacBook bag Cactus</p>
                <span className='priceValue'>850 UAH</span>
              </div>
              <img
                className='closeBtn'
                src='/images/close.svg'
                alt='closeBtn'
              />
            </div>
            <div className='drawerItem'>
              <img className='drawerImg' src='./images/bags/4.jpg' alt='bag' />
              <div>
                <p>MacBook bag Spacecraft</p>
                <span className='priceValue'>850 UAH</span>
              </div>
              <img
                className='closeBtn'
                src='/images/close.svg'
                alt='closeBtn'
              />
            </div>
          </div>

          <div className='drawerTotal'>
            <div className='drawerTotalItem'>
              <p>Total:</p>
              <p className='drawerPrice'>
                1700<span>UAH</span>
              </p>
            </div>
            <button className='btn'>checkout</button>
          </div>
        </div>
      </div>
      <header className='header'>
        <div className='headerLeft'>
          <img className='logo' src='/images/bag1.svg' alt='logo' />
          <div className='headerInfo'>
            <h3>Kinmac</h3>
            <p>MacBook bag</p>
          </div>
        </div>
        <ul className='headerRight'>
          <li className='navLeft'>
            <img className='cart' src='/images/cart.svg' alt='cart' />
            <span>1700 UAH</span>
          </li>
          <li className='navRight'>
            <img className='chosen' src='/images/chosen.png' alt='chosen' />
            <img className='user' src='/images/user.png' alt='user' />
          </li>
        </ul>
      </header>
      <div className='content'>
        <div className='contentBox'>
          <h1>All bags</h1>

          <div className='search-block'>
            <img src='/images/search.png' alt='search' />
            <input type='text' placeholder='Search' />
          </div>
        </div>
        <div className='cards'>
          <div className='card'>
            <div className='elected'>
              <img src='/images/chosen-unliked.svg' alt='unliked' />
            </div>
            <img className='cardImg' src='./images/bags/1.jpg' alt='bag' />
            <p>MacBook bag Black Maple leaf</p>
            <div className='price-box'>
              <div>
                <span className='price'>Price:</span>
                <span className='priceValue'>850 UAH</span>
              </div>
              <button>
                <img src='images/vector.png' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='elected'>
              <img src='/images/chosen-unliked.svg' alt='unliked' />
            </div>
            <img className='cardImg' src='./images/bags/2.jpg' alt='bag' />
            <p>MacBook bag Cactus</p>
            <div className='price-box'>
              <div>
                <span className='price'>Price:</span>
                <span className='priceValue'>850 UAH</span>
              </div>
              <button>
                <img src='images/vector.png' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='elected'>
              <img src='/images/chosen-unliked.svg' alt='unliked' />
            </div>
            <img className='cardImg' src='./images/bags/3.jpg' alt='bag' />
            <p>MacBook bag Yellow chrysanthemum</p>
            <div className='price-box'>
              <div>
                <span className='price'>Price:</span>
                <span className='priceValue'>850 UAH</span>
              </div>
              <button>
                <img src='images/vector.png' alt='plus' />
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='elected'>
              <img src='/images/chosen-unliked.svg' alt='unliked' />
            </div>
            <img className='cardImg' src='./images/bags/4.jpg' alt='bag' />
            <p>MacBook bag Spacecraft</p>
            <div className='price-box'>
              <div>
                <span className='price'>Price:</span>
                <span className='priceValue'>850 UAH</span>
              </div>
              <button>
                <img src='images/vector.png' alt='plus' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
