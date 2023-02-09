import "./index.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between align-center mb-30">Корзина
            <img width={30} height={25} className="cu-p" src="/img/exit.svg" alt="exit"/>
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <img
                width={70}
                src="/img/sneakers/1.jpg"
                alt="sneakers"
                className="mr-25"
              />
              <div>
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999руб.</b>
              </div>
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="7.5"
                  fill="white"
                  stroke="#F2F2F2"
                />
                <path
                  d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                  fill="#B5B5B5"
                />
              </svg>
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <img
                width={70}
                src="/img/sneakers/3.jpg"
                alt="sneakers"
                className="mr-25"
              />
              <div>
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999руб.</b>
              </div>
              <svg
                width="50"
                height="50"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="31"
                  height="31"
                  rx="7.5"
                  fill="white"
                  stroke="#F2F2F2"
                />
                <path
                  d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                  fill="#B5B5B5"
                />
              </svg>
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul className="mb-30">
              <li className="d-flex">
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li className="d-flex">
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenBtn cu-p">
              Оформить заказ 
              <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex">
          <img
            className="mr-20"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="logo"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="pr-20">
            <img alt="cart" width={18} height={18} src="/img/cart.svg" />
            <span className="pl-15">1205 руб.</span>
          </li>
          <li>
            <img
              className="pr-15"
              alt="favorite"
              width={18}
              height={18}
              src="/img/favorite.svg"
            />
            <img alt="user" width={18} height={18} src="/img/user.svg" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="mb-40 d-flex align-center justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="sneakers d-flex">
          <div className="card mr-30">
            <div className="favorite">
              <img alt="liked" src="/img/heart-unliked.svg" />
            </div>
            <img
              className="mb-15 ml-15"
              width={133}
              height={112}
              alt="sneaker"
              src="/img/sneakers/1.jpg"
            />
            <p className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/plus.svg" alt="btn" />
              </button>
            </div>
          </div>
          <div className="card mr-30">
            <img
              className="mb-15 ml-15"
              width={133}
              height={112}
              alt="sneaker"
              src="/img/sneakers/2.jpg"
            />
            <p className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column ">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/plus.svg" alt="btn" />
              </button>
            </div>
          </div>
          <div className="card mr-30">
            <img
              className="mb-15 ml-15"
              width={133}
              height={112}
              alt="sneaker"
              src="/img/sneakers/3.jpg"
            />
            <p className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/plus.svg" alt="btn" />
              </button>
            </div>
          </div>
          <div className="card mr-30">
            <img
              className="mb-15 ml-15"
              width={133}
              height={112}
              alt="sneaker"
              src="/img/sneakers/4.jpg"
            />
            <p className="mb-10">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена: </span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img width={32} height={32} src="/img/plus.svg" alt="btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
