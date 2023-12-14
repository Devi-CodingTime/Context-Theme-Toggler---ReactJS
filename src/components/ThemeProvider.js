import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
const [theme, setTheme] = useState("light");
const changeTheme = ()=>{
    setTheme(theme=="light"?"dark":"light")
}
const data = {theme,changeTheme};
    return (
        <React.Fragment value={data}>
            <ThemeContext.Provider>
                {props.children}
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}