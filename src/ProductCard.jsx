import { useState } from 'react'

function ProductCard(props) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount(count + 1)
  }

  return (
    <article className="product-card">
      <div className={'product-image ' + props.color}>
        <span className="product-label">DESK ESSENTIALS</span>
        <img src={props.image} alt={props.name} />
      </div>
      <div className="product-info">
        <p className="category">{props.category}</p>
        <h3>{props.name}</h3>
        <p className="price">{props.price} <span>₽</span></p>
        <p className="quantity" aria-live="polite">В корзине: <strong>{count}</strong> шт.</p>
        <button type="button" onClick={addToCart}>Добавить в корзину <span aria-hidden="true">+</span></button>
      </div>
    </article>
  )
}

export default ProductCard
