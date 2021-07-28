import "./App.css";
import Refsdemo from "./component/refsdemo";
// import { Fragment } from "react";
import React from "react";
//import FRparent from "./component/FRparent";
import Hovercounter from "./component/hovercounter";
import Clickcounter from "./component/clickcounter";
import Time from "./component/jquerytime";
// import Prtl from "./component/portalex";
import Refndom from "./component/ref&dom";
import Counter from "./component/renderpropcounter";
import Hovercounter2 from "./component/hovercounter2";
import Clickcounter2 from "./component/clickcounter2";

const Frp = React.lazy(() => import("./component/FRparent"));
function App() {
  return (
    <>
      <Counter
        render={(count, incrementHandle) => (
          <Clickcounter2 count={count} incrementHandle={incrementHandle} />
        )}
      />
      <Counter
        render={(count, incrementHandle) => (
          <Hovercounter2 count={count} incrementHandle={incrementHandle} />
        )}
      />
      {/* <Counter />
      <Clickcounter2 />
      <Hovercounter2 /> */}
      <Refndom />
      <Time />
      <Refsdemo />
      {/* <FRparent /> */}
      <React.Suspense fallback="Loading...">
        <Frp />
      </React.Suspense>
      <Clickcounter />
      <Hovercounter />
    </>
  );
}

export default App;
