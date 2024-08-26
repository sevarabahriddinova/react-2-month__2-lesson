import React from 'react'

import { useContext, useReducer } from "react";
import { reducer } from "./context/reduser";
import ProjectStore from "./context/store";

const Login = () => {
    const [state,dispatch]=useContext (ProjectStore);

    console.log(state)

  return (
    <div>
        <h2>Login</h2>
       <input type="text" placeholder="Email"onChange={(e)=> dispatch({type:"CHANGE__EMAIL", email:e.target.value})} />
       <input type="text" placeholder="Pasword"onChange={(e)=> dispatch({type:"CHANGE__PASWORD", pasword:e.target.value})} />
     <hr />
    </div>
  )
}

export default Login
