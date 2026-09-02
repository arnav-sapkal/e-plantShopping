import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery</h1>

        <p>
          Discover beautiful indoor plants that bring life and freshness into
          your home.
        </p>

        <button
          className="btn"
          onClick={() => setShowProductList(true)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
