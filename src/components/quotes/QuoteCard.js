import React from "react";
import { Heart } from "react-feather";

export default function QuoteCard({ quote, addToFavorites }) {
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
          <Heart onClick={() => addToFavorites(quote.id)} />
        </p>
      </footer>
    </article>
  );
}
