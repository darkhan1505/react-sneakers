function Drawer({ drawClose, onRemove , items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
          Корзина{" "}
          <img
            width={24}
            onClick={drawClose}
            className="cu-p"
            src="/img/exit.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? 
        <>
          <div className="items">
            {items.map((obj) => (
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{ backgroundImage: `url(${obj.imageUrl})` }}
                  className="cartItemImg"
                ></div>

                <div className="mr-20 flex">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/exit.svg" alt="Remove" />
              </div>
            ))}
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </>: 
        <div style={{margin: 'auto'}} className="d-flex align-center text-center flex-column">
          <img width={100} src="./img/basket.jpg" alt='Корзина'/>
          <h2>Корзина пустая</h2>
          <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
          <button onClick={drawClose} width={100} className="greenButton">
            <img className="arrow-left" src="./img/arrow-left.svg" alt='Arrow'/> Вернуться назад</button>
        </div>}
      </div>
    </div>
  );
}

export default Drawer;
