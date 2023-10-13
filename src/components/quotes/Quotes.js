import React from "react";
import QuoteCard from "./QuoteCard";
import CategoryForm from "./CategoryForm";

export default function Quotes({
  quotes,
  categories,
  category,
  handleCategoryChange,
}) {
  return (
    <section className="all-quotes">
      <div className="quotes wrapper">
        <div className="category-header">
          <p>Browse through your collection of quotes</p>
          <CategoryForm
            categories={categories}
            category={category}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
        {quotes.map((quote) => (
          <QuoteCard quote={quote} />
        ))}
      </div>
    </section>
  );
}
