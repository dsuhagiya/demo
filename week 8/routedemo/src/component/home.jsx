import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>Contact</div>
      <h1>Welcome Home</h1>
    </div>
  );
}

export default Home;
