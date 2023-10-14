import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Quotes from "./components/quotes/Quotes";
import FavoriteQuotes from "./components/quotes/FavoriteQuotes";
import Message from "./components/Message";
import { Loader } from "react-feather";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("All");
  const [favoriteQuotes, setFavoriteQuotes] = useState(
    JSON.parse(window.localStorage.getItem("favorites")) || []
  );
  const [messageText, setMessageText] = useState("");
  const [showMessage, setShowMessage] = useState(false);

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

  useEffect(() => {
    window.localStorage.setItem("favorites", JSON.stringify(favoriteQuotes));
  }, [favoriteQuotes]);

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  function addToFavorites(quoteId) {
    const selectedQuote = quotes.find((quote) => quote.id === quoteId);
    const alreadyFavorite = favoriteQuotes.find(
      (quote) => quote.id === quoteId
    );
    if (alreadyFavorite) {
      setMessageText(
        "This quote is already in your favorites! Choose another."
      );
    } else if (favoriteQuotes.length < maxFaves) {
      setFavoriteQuotes(favoriteQuotes.concat(selectedQuote));
      setMessageText("Added to favorites!");
    } else {
      setMessageText(
        "Max number of Favorite Quotes reached. Please delete one to add another!"
      );
    }
    setShowMessage(true);
  }

  function removeMessage() {
    setShowMessage(false);
  }

  function removeFromFavorites(quoteId) {
    setFavoriteQuotes(favoriteQuotes.filter((quote) => quote.id !== quoteId));
  }

  return (
    <div className="App">
      {showMessage && (
        <Message messageText={messageText} removeMessage={removeMessage} />
      )}
      <Header />
      <main>
        {loading ? (
          <Loader />
        ) : (
          <>
            <FavoriteQuotes
              favoriteQuotes={favoriteQuotes}
              maxFaves={maxFaves}
              removeFromFavorites={removeFromFavorites}
            />
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
              favoriteQuotes={favoriteQuotes}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
