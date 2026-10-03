import { useState } from "react";

function ShopItemCard(props) {
  const [count, setCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  function handleAdd() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }
  function handleRemove() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }
  return (
    <article className="shop-card">
      <div className="product-art" aria-hidden="true">
        <span className="product-orb" />
        <span className="product-pedestal" />
      </div>
      <div className="product-title">
        <h3>{props.name}</h3>
        <strong>{props.price} ₽</strong>
      </div>
      <p className="product-description">{props.description}</p>
      <p className="stock-label">В наличии: {props.stock}</p>
      <p className="cart-status" aria-live="polite">
        {count ? "В корзине: " + count : "Товар не добавлен в корзину"}
      </p>
      <div className="cart-controls">
        <button
          onClick={handleRemove}
          disabled={count === 0}
          aria-label="Убрать из корзины"
        >
          −
        </button>
        <button
          className="primary"
          onClick={handleAdd}
          disabled={count === props.stock}
        >
          Добавить в корзину
        </button>
      </div>
      <button
        className="shop-favorite"
        onClick={handleFavorite}
        aria-pressed={isFavorite}
      >
        <span aria-hidden="true">{isFavorite ? "★" : "☆"}</span>{" "}
        {isFavorite ? "Убрать из избранного" : "В избранное"}
      </button>
    </article>
  );
}
export default ShopItemCard;
