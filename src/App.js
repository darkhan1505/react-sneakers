import './index.scss';

function App() {
  return (
    <div className="wrapper">
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex'>
          <img className='mr-20' width={40} height={40} src="/img/logo.png" alt='logo' />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='d-flex align-center'>
          <li className='pr-20'>
            <img alt='cart' width={18} height={18} src="/img/cart.svg" />
            <span className='pl-15'>1205 руб.</span>
          </li>
          <li>
            <img className='pr-15' alt='favorite' width={18} height={18} src="/img/favorite.svg" />
            <img alt='user' width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className='content p-40'>
        <h1 className='mb-25'>Все кроссовки</h1>

        <div className='sneakers d-flex'>
          <div className='card mr-30'>
            <img className='mb-15 ml-15' width={133} height={112} alt='sneaker' src='/img/sneakers/1.jpg' />
            <p className='mb-10'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column'>
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src='/img/plus.svg' alt="btn" />
              </button>
            </div>
          </div>
          <div className='card mr-30'>
            <img className='mb-15 ml-15' width={133} height={112} alt='sneaker' src='/img/sneakers/2.jpg' />
            <p className='mb-10'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column'>
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src='/img/plus.svg' alt="btn" />
              </button>
            </div>
          </div>
          <div className='card mr-30'>
            <img className='mb-15 ml-15' width={133} height={112} alt='sneaker' src='/img/sneakers/3.jpg' />
            <p className='mb-10'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column'>
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src='/img/plus.svg' alt="btn" />
              </button>
            </div>
          </div>
          <div className='card mr-30'>
            <img className='mb-15 ml-15' width={133} height={112} alt='sneaker' src='/img/sneakers/4.jpg' />
            <p className='mb-10'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='d-flex justify-between'>
              <div className='d-flex flex-column'>
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button>
                <img width={32} height={32} src='/img/plus.svg' alt="btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
