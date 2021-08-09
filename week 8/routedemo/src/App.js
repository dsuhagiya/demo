import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";

const User = () => {
  return <h1>Welcome Use</h1>;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path="/"
          exact
          strict
          render={() => {
            return <Home />;
          }}
        />
        <Route
          path="/About"
          exact
          strict
          render={() => {
            return <About />;
          }}
        />
        <Route
          path="/Contact"
          exact
          strict
          render={() => {
            return <Contact />;
          }}
        />
        <Route
          path="/User/:username"
          exact
          strict
          render={() => {
            return <User />;
          }}
        />
      </div>
    </Router>
  );
}

export default App;
