import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

const UseContext = () => {
    const { setTheme, theme } = useContext(GlobalContext);
    console.log(theme);
    return (
        <>
            <h1>UseContext Example --</h1>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>ChangeTheme</button>
        </>
    )
}

export default UseContext