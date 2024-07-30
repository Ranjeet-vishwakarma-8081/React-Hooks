import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const Login = () => {

    const { theme } = useContext(GlobalContext);

    return (
        <div>
            <h1>Login</h1>
            <button style={theme === "dark" ? { backgroundColor: "black", color: "#fff" } : { backgroundColor: "yellow", color: "#000" }}>Login</button>
        </div>
    )
}

export default Login