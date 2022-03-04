import "./LogIn.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const loginPatient =  async(deed) =>{
    return fetch("http://localhost:8080/login", {
        method:"POST",
        header: {
    "Content-Type":"application/json",
    },
    body:JSON.stringify(deed)
}).then(info => info.json());
};

export default function LogIn({setInputUsername, setInputPassword, setToken}) {
    const [Username, setUsername] = useState();
    const [Password, setPassword] = useState();



    const submitBtn = async (e) => {
        e.preventDefault();
        const token = await loginPatient ();
        setToken(token);
        s
    };


    if(token) {
        const { username, password } = token;
        if (inputUsername === username && inputPassword === password){
            console.log("Congrats")
        }
    }

    return (
        <div className="container">
            <form onSubmit={submitBtn}>
                <label>
                    <h1>Log In</h1>
                    <input type="text" onChange={(e)=>
                        setinputUsername(e.target.value)}/>
                </label>
                 <label>
                     <input type="password"  onChange={(e) => 
                         setinputPassword(e.target.value)}/>
                </label>
                 <div>
                     <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

LogIn.prototype ={
    setToken: PropTypes.func.isRequired
}