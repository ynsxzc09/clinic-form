import lock from "../pics/lock.png"
import icon from "../pics/icon.png"
import "./LogIn.css";
import { useState, useEffect } from "react";

export default function LogIn({ setToken, setLoading }) {
  const [inputUsername, setinputUsername] = useState("");
  const [inputPassword, setinputPassword] = useState("");
  const [deed, setDeed] = useState(null);
  const [info, setInfo] = useState(null);

  function submitInput(e) {
    e.preventDefault();
    setDeed({ inputUsername, inputPassword, dataBase: "token" });
  }

  function validate({ inputUsername, inputPassword, dataBase }) {
    const parsedData = JSON.parse(localStorage.getItem(dataBase));
    const token = parsedData.find(({ username }) => username === inputUsername);

    if (token) {
      const { username, password } = token;
      if (username === inputUsername && password === inputPassword) {
        return true;
      } else {
        setInfo("Invalid password");
        setTimeout(() => {
          setInfo("");
        }, 5000);
        setinputPassword("");
        return false;
      }
    } else {
      setInfo("Invalid information");
      setTimeout(() => {
        setInfo("");
      }, 5000);
      setinputUsername("");
      setinputPassword("");
      return false;
    }
  }

  useEffect(() => { 
    deed &&
      setTimeout(() => {
        setToken(validate(deed));
      }, 5000);
  }, [deed, setToken, setLoading]);


  return (
    <div className="container">
        <div className="top">
        <h1>Log In</h1>
        <div className="pop">
        <h2>{info && info}</h2>
        </div>
        </div>
        <div className="bottom-card">
          <form onSubmit={submitInput}>
                
               <div className="bottom">
                    <img src={icon} alt="username" className="left-side" />
                    <input
                    className="username"
                    type="text"
                    onChange={(e) => setinputUsername(e.target.value)}
                    value={inputUsername}
                    required
                    placeholder=" Username"
                    />
                </div>

                <div className="bottom1">
                    <img src={lock} alt="lock" className="left-side" />
                    <input
                    className="password"
                    type="password"
                    onChange={(e) => setinputPassword(e.target.value)}
                    value={inputPassword}
                    required
                    placeholder=" Password"/>
                </div>
                <div className="button">
                    <input
                    className="forms"
                    type="submit"
                    placeholder="Login"
                    />
                </div>
          </form>
      </div>
    </div>
  );
}