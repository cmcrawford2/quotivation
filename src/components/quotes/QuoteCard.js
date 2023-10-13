import React from "react";
import { Heart } from "react-feather";

export default function QuoteCard({ quote, addToFavorites, favoriteQuotes }) {
  const alreadyFavorite = favoriteQuotes.find(
    (faveQuote) => faveQuote.id === quote.id
  );
  const faveStyle = alreadyFavorite ? "#333" : "";

  return (
    <article className="quote-card">
      <div>
        <p className="categories">
          {quote.categories.map((category, index) => (
            <span className="category" key={index}>
              {category}
            </span>
          ))}
        </p>
        <h3>{quote.text}</h3>
      </div>
      <footer>
        <p className="author">{quote.author}</p>
        <p className="add-favorite">
          <Heart
            style={{ fill: faveStyle }}
            onClick={() => addToFavorites(quote.id)}
          />
        </p>
      </footer>
    </article>
  );
}
