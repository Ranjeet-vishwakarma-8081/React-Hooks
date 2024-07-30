import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const SignUp = () => {
    const  {theme}=useContext(GlobalContext);
  return (
    <div>
        <h1>Sign Up</h1>
        <button style={theme==="dark"?
            {backgroundColor : "red",color:"blue"}:{backgroundColor : "green",color:"orange"}
        }>Sign Up</button>
    </div>
  )
}

export default SignUp