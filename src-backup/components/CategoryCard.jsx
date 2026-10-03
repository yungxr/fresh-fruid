import { useState } from "react";
import { Link } from "react-router";

function CategoryCard(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }
  function handleBreak() {
    setIsJoined(!isJoined);
  }
  return (
    <article className="category-row">
      <span className={"category-icon " + props.tone} aria-hidden="true">
        {props.icon}
      </span>
      <div className="category-copy">
        <h3>
          {props.path ? (<Link className="category-link" to={props.path}>{props.name}</Link>) : (props.name)}
        </h3>
        <p>{props.description}</p>
        <small
          className={isJoined ? "joined-status" : "membership-status"}
          aria-live="polite"
        >
          {isJoined ? "✓ Вы вступили в категорию!" : "Вы ещё не вступили"}
        </small>
      </div>
      <div className="category-controls">
        <span className="category-online">
          <span className="online-dot" /> {props.online} онлайн{" "}
          <small>демо</small>
        </span>
        <div className="category-buttons">
          <button
            className={isJoined ? "joined-button" : ""}
            onClick={handleBreak}
            aria-pressed={isJoined}
          >
            {isJoined ? "Выйти" : "Вступить"}
          </button>
          <button
            className="favorite-button"
            onClick={handleFavorite}
            aria-pressed={isFavorite}
            aria-label={isFavorite ? "Убрать из избранного" : "В избранное"}
            title={isFavorite ? "Убрать из избранного" : "В избранное"}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      </div>
    </article>
  );
}
export default CategoryCard;
