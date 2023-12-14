import React from 'react';
import { useContext } from 'react';
import React from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
    const {theme} = useContext(ThemeContext);

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${theme==="light"?"dark":"light"}`}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={`txt-${theme}`}>
        lorem ipsum dolor iterit n stuff
        </p>
        <button id="local-theme-toggler" className={`btn btn-${theme} txt-${theme}`}>{`Toggle local theme to ${theme}`}</button>
    </div>
)
}

export { LocalThemedBox }