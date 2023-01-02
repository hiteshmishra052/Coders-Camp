import React from 'react';
import "./register.scss"
import { Link } from "react-router-dom";
const register =  () => {
  return (
    <div>
      <div className="register">
        <div className="card">
            <div className="left">
                <h1>Coders Camp</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugiat repellat aliquid odit totam assumenda laboriosam consectetur consequatur necessitatibus optio!
                </p>
                <span>Do you have an account?</span>
                <Link to= "/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder='Username'/>
                    <input type="email" placeholder='Email'/>
                    <input type="password" placeholder='Passsword'/>
                    <input type="text" placeholder='Name'/>
                    <button>Register</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default register;