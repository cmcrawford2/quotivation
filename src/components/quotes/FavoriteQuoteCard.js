import React from "react";

export default function FavoriteQuoteCard({
  quote,
  listPosition,
  removeFromFavorites,
}) {
  return (
    <li className="quote-card" data-list-position={listPosition}>
      <span
        className="close-quote"
        onClick={() => removeFromFavorites(quote.id)}
      >
        X
      </span>
      <h3>{quote.text}</h3>
      <p>{quote.author}</p>
    </li>
  );
}
