import { Link } from "react-router";
import { useState } from "react";

function TopicCard(props) {
  const [isLiked, setIsLikedOn] = useState(false);
  function handleSwitch() {
    setIsLikedOn((previous) => !previous);
  }
  return (
    <article className="topic-row">
      <span className="topic-avatar" aria-hidden="true">
        {props.author[0]}
      </span>
      <div className="topic-copy">
        <h3>{props.title}</h3>
        <div className="topic-category">
          {props.categoryPath ? (
            <Link to={props.categoryPath}>{props.category}</Link>
          ) : (
            <span>{props.category}</span>
          )}
        </div>
        <p>
          Автор: <strong>{props.author}</strong>{" "}
          <span>· Ответы: {props.replies}</span>
        </p>
      </div>
      <div className="topic-actions">
        <button
          className="like-button"
          onClick={handleSwitch}
          aria-pressed={isLiked}
        >
          <span aria-hidden="true">{isLiked ? "♥" : "♡"}</span>{" "}
          {isLiked ? "Убрать лайк" : "Поставить лайк"}
        </button>
        <small aria-live="polite">Лайков: {isLiked ? "1" : "0"}</small>
      </div>
    </article>
  );
}
export default TopicCard;
