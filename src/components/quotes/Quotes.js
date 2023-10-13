import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

export default function Quotes({
  quotes,
  categories,
  category,
  handleCategoryChange,
  addToFavorites,
}) {
  return (
    <section className="all-quotes">
      <div className="quotes wrapper">
        <div className="category-header">
          <h2>Pick your Favorite Quotes Below</h2>
          <p>Browse through your collection of quotes</p>
          <CategoryForm
            categories={categories}
            category={category}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
        {quotes.map((quote) => (
          <QuoteCard
            quote={quote}
            key={quote.id}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </section>
  );
}
