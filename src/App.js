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

  return (
    <div className="App">
      <Header />
      <main>
        {loading ? (
          <Loader />
        ) : (
          <Quotes
            quotes={
              category === "All"
                ? quotes
                : quotes.filter((quote) => quote.categories.includes(category))
            }
            categories={categories}
            category={category}
            handleCategoryChange={handleCategoryChange}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
