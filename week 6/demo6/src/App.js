//import logo from './logo.svg';
import "./App.css";
import React, { Component } from "react";
import { BuggyCounter } from "./component/errorboundaries";
import ErrorBoundary from "./component/errorboundaries";
import P1 from "./component/p1";
import { File } from "./component/file";
import { Dynamicdata } from "./component/dynamicdata";
import { Datapost } from "./component/datapost";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <P1 />
          <p>
            <b>
              This is an example of error boundaries in React 16.
              <br />
              <br />
              Click on the numbers to increase the counters.
              <br />
              The counter is programmed to throw when it reaches 5. This
              simulates a JavaScript error in a component.
            </b>
          </p>
          <hr />
          <ErrorBoundary>
            <p>
              These two counters are inside the same error boundary. If one
              crashes, the error boundary will replace both of them.
            </p>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
          <hr />
          <p>
            These two counters are each inside of their own error boundary. So
            if one crashes, the other is not affected.
          </p>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>
        <Datapost />
        <Dynamicdata />
        <File />
      </div>
    );
  }
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch,
// } from "react-router-dom";

// // Since routes are regular React components, they
// // may be rendered anywhere in the app, including in
// // child elements.
// //
// // This helps when it's time to code-split your app
// // into multiple bundles because code-splitting a
// // React Router app is the same as code-splitting
// // any other React app.

// export default function NestingExample() {

//   return (

//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   let { path, url } = useRouteMatch();
//   return (
//     <div>
//       <h2>About</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/social`}>Email</Link>
//         </li>
//         <li>
//           <Link to={`${url}/branch`}>Branch</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Our progress:</h3>
//         </Route>
//         <Route path={`${path}/:aboutId`}>
//           <Abouts />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topics() {
//   // The `path` lets us build <Route> paths that are
//   // relative to the parent route, while the `url` lets
//   // us build relative links.
//   let { path, url } = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { topicId } = useParams();

//   return (
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

// function Abouts() {
//   // The <Route> that rendered this component has a
//   // path of `/topics/:topicId`. The `:topicId` portion
//   // of the URL indicates a placeholder that we can
//   // get from `useParams()`.
//   let { aboutId } = useParams();

//   return (
//     <div>
//       <h3>{aboutId}</h3>
//     </div>
//   );
// }
