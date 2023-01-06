import React, { useContext } from 'react';
import "./login.scss"
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authContext';
const Login =  () => {

  const {login} = useContext(AuthContext);

  const handleLogin = ()=>{
    login();
  }
  return (
    <div>
      <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat repellat aliquid odit totam assumenda laboriosam consectetur consequatur necessitatibus optio!
                </p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder='Username'/>
                    <input type="password" placeholder='Passsword'/>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;