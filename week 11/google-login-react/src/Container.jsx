import React, { useState } from "react";
import Login from "./Login";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import Charts from "./Charts";
import DarkModeToggle from "react-dark-mode-toggle";

const clientId =
  "573095825236-fchrhl696rbf14pos5164o3inf1r75jn.apps.googleusercontent.com";

function Container(props) {
  const [isLogin, setLogin] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  //   console.log(isDarkMode);
  const onLoginSuccess = (res) => {
    localStorage.setItem("token", res.tokenId);
    const td = localStorage.getItem("token");
    setLogin(td);
    console.log("token", td);
    console.log(props.history);
    props.history.push("/charts");
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    setLogin(null);
    console.clear();
    props.history.push("/");
  };
  let darkmode = isDarkMode ? "bg-dark text-white" : "bg-light text-dark";
  return (
    <div className={darkmode}>
      <div className="float-start">
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={40}
        />
      </div>
      <Switch>
        <Route
          path="/"
          exact
          strict
          render={() => {
            return (
              <Login
                isDarkMode={isDarkMode}
                clientId={clientId}
                onLoginFailure={onLoginFailure}
                onLoginSuccess={onLoginSuccess}
              />
            );
          }}
        />
        <Route
          path="/charts"
          exact
          strict
          render={() => {
            if (isLogin) {
              return (
                <Charts
                  isDarkMode={isDarkMode}
                  clientId={clientId}
                  onSignoutSuccess={onSignoutSuccess}
                />
              );
            } else {
              return <Redirect to={{ pathname: "/" }} />;
            }
          }}
        />
        <Route path="*">
          <div className="text-center">404 Not found </div>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(Container);
