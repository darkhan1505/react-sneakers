import styles from './Card.module.scss';
import React from 'react'

function Card({ onPlus, onFavorite, title, price, imageUrl}) {
  const [isFavorite, setIsFavorite] = React.useState(false)
  const [sel, setSel] = React.useState(false)

  const like = () => {
    onFavorite({title, price, imageUrl})
    setIsFavorite(!isFavorite)
  }
  const e = () => {
    setSel(!sel)
    onPlus({title, price, imageUrl})
  }

  return (  
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={like} src={isFavorite ? './img/heart-liked.svg' : './img/heart-unliked.svg'} alt="Unliked" />
      </div>
      <img className='ml-20' width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5 className='mb-5'>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className='cu-p' width={35} height={40} onClick={e} src={sel ? './img/btn-checked.svg' : './img/plus.svg'} alt="Plus" />
      </div>
    </div>
  );
}

export default Card;