import React, { useState } from "react";
import Movies from "./components/Movies";
import logo from "./logo.svg";
import "./App.css";
// import Movies from "./components/Movies.jsx";

function App() {
  const [year, setYear] = React.useState();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Wiz</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setYear(event.target.year.value);
          }}
        >
          <label> Pick a year:</label>

          <input
            type="text"
            name="year"
            aria-label="Insert a year"
            placeholder="2015"
          />
          <button type="submit"> Submit</button>
        </form>
        <Movies year={year} />
      </header>
    </div>
  );
}

export default App;
