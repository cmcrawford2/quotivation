import React from "react";
import QuoteCard from "./QuoteCard";

export default function Quotes({ quotes }) {
  return (
    <section className="all-quotes">
      <div className="quotes wrapper">
        {quotes.map((quote) => (
          <QuoteCard quote={quote} />
        ))}
      </div>
    </section>
  );
}
