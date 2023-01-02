import React from 'react';
import "./login.scss"
import { Link } from "react-router-dom";
const login =  () => {
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
                    <button>Login</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default login;