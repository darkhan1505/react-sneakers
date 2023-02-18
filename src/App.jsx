import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react'
import axios from 'axios'
import './index.scss'



function App() {

  const [draw, setDraw] = React.useState(false)
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [searchValue, setSeachValue] = React.useState('')


  const onChangeSearchInput = (event) => {
    setSeachValue(event.target.value)
  }

  const onAddToCart = (obj) => {
    axios.post('https://63e7c8b9cbdc5658737d4eb2.mockapi.io/cart', obj)
    setCartItems(prev => [...prev, obj])
  }

  const onAddToFavorite = (obj) => {
    axios.post('https://63ef42d0271439b7fe6afc0f.mockapi.io/favorites', obj)
    setFavorites(prev => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://63e7c8b9cbdc5658737d4eb2.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
    console.log(id)
  }

  React.useEffect(() => {
    axios.get('https://63e7c8b9cbdc5658737d4eb2.mockapi.io/title')
      .then((res) => setItems(res.data))
    axios.get('https://63e7c8b9cbdc5658737d4eb2.mockapi.io/cart')
      .then((res) => setCartItems(res.data))
  }, [])      



  return (
      <div className="wrapper clear">
        {draw && <Drawer onRemove={onRemoveItem} items={cartItems} style={{ position: "fixed" }} drawClose={() => setDraw(false)} />}
        <Header drawOpen={() => setDraw(true)} />
        <div className="content p-40">

          <div className="d-flex align-center justify-between mb-40">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
              {searchValue && <img className='cu-p' onClick={() => setSeachValue('')} width={14} src='./img/exit.svg' alt='clear' />}
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {items
              .filter(obj => obj.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((obj, index) => (
                <Card
                  onPlus={onAddToCart}
                  title={obj.title}
                  price={obj.price}
                  imageUrl={obj.imageUrl}
                  key={index}
                  onFavorite={() => onAddToFavorite(obj)}
                />
              ))}
          </div>

        </div>

      </div>
  );
}

export default App;
