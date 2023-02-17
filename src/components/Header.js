function Header(props) {
    return (
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="phot" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.drawOpen} className="mr-30 cu-p  ">
            <img width={18} height={18} src="/img/cart.svg" alt="phot" />
            <span>0 руб.</span>
          </li>
          <li className="cu-p">
            <img width={18} height={18} src="/img/favorite.svg" alt="phot" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="phot" />
          </li>
        </ul>
      </header>
    );
  }
  
  export default Header;