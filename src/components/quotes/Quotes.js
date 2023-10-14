import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

export default function Quotes({
  quotes,
  categories,
  category,
  handleCategoryChange,
  addToFavorites,
  favoriteQuotes,
}) {
  return (
    <section className="all-quotes">
      <div className="quotes wrapper">
        <div className="category-header">
          <h2>Pick your Favorite Quotes Below</h2>
          <p>
            You have {quotes.length > 0 && "a collection of"} {quotes.length}{" "}
            great {category !== "All" && category}{" "}
            {quotes.length === 1 ? "quote" : "quotes"}!
          </p>
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
            favoriteQuotes={favoriteQuotes}
          />
        ))}
      </div>
    </section>
  );
}
