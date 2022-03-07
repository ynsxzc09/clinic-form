import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import Dashboard from "./component/Dashboard.jsx";
import Login from "./component/LogIn.jsx"

function App() {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(token));
    localStorage.setItem(
      "token",
      JSON.stringify([{ username: "bamkachu", password: "03210804" }])
    );
  });


  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          {token ? (
            <Route path="/">
              <h1 className="main-heading">Welcome</h1>
              {!token ? "Loading" : <Dashboard setToken={setToken} />}
            </Route>
          ) : (
            <Route path="/">
              <Login setToken={setToken} />
            </Route>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
