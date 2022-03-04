import "./App.css";
import Dashboard from "./component/Dashboard";
import LogIn from "./component/LogIn";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { useState } from "react";
import useToken from "./component/useToken";


function App() {
  const [Authentication, setAuthentication] = useState(false);
  const { token, setToken } = useToken();
 
  

if (!Authentication) {
  return (<LogIn setAuthentication={setAuthentication} setToken={setToken} token={token} />
  );
}

  return (
    <div className="wrapper">
    <h1 className="main-heading">Log In</h1>
    <BrowserRouter>
     <Switch>
       <Route path="/"><Dashboard/></Route>
       <Route path="/"><LogIn/></Route>
     </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
