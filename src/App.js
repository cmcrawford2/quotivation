import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import { Loader } from "react-feather";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  const quotesUrl =
    "https://gist.githubusercontent.com/skillcrush-curriculum/6365d193df80174943f6664c7c6dbadf/raw/1f1e06df2f4fc3c2ef4c30a3a4010149f270c0e0/quotes.js";

  const categories = [
    "All",
    "Leadership",
    "Empathy",
    "Motivation",
    "Learning",
    "Success",
    "Empowerment",
  ];

  const maxFaves = 3;

  async function fetchQuotes() {
    try {
      setLoading(true);
      const res = await fetch(quotesUrl);
      const data = await res.json();
      setQuotes(data);
    } catch (e) {
      console.log("error fetching quotes");
      console.log(e);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  // console.log(quotes);

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function addToFavorites(quoteId) {
    const selectedQuote = quotes.find((quote) => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find(
      (quote) => quote.id === quoteId
    );
    if (alreadyFavorite) console.log("Already favorite");
    else if (favoriteQuotes.length < maxFaves) {
      setFavoriteQuotes(favoriteQuotes.concat(selectedQuote));
      console.log("Adding favorite quote");
    } else console.log("too many favorites!");
  }

  return (
    <div className="App">
      <Header />
      <main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <section className="favorite-quotes">
              <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length > 0 && JSON.stringify(favoriteQuotes)}
                <div className="favorite-quotes-description">
                  You can add up to three favorites by selecting from the
                  options below. <br /> Once you choose, they will appear here.
                </div>
              </div>
            </section>
            <Quotes
              quotes={
                category === "All"
                  ? quotes
                  : quotes.filter((quote) =>
                      quote.categories.includes(category)
                    )
              }
              categories={categories}
              category={category}
              handleCategoryChange={handleCategoryChange}
              addToFavorites={addToFavorites}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
