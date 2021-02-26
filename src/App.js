import React, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import getQuote from "./services/quote";
import "./App.scss";

function App() {
  const count = 0;
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    if (count === 0) {
      fetchQuote();
    }
  }, [count]);

  const fetchQuote = async () => {
    const result = await getQuote();
    setQuote(result.quotes[0].text);
    setAuthor(result.quotes[0].author);
  };

  const content = (
    <div>
      <hr className="horizontal-line" />
      <div className="quote-content">
        <span>{quote}</span>
        <span className="author">{`- ${author}`}</span>
      </div>

      <footer className="footer">
        <Button
          buttonText="New Quote"
          buttonClickHandler={() => {
            fetchQuote();
          }}
        />
      </footer>
    </div>
  );

  return (
    <div className="App">
      <Card content={content} headerText="Quote of the day" />
    </div>
  );
}

export default App;
