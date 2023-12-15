import React from 'react';

const LocalThemedBox = (props) => {
const {theme} = props;
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${theme==="light"?"dark":"light"}`}>
        {/* Write code below this line */}
        <p id="local-themed-text-container" className={`txt-${theme==="light"?"dark":"light"}`}>
        lorem ipsum dolor iterit n stuff
        </p>
        <button id="local-theme-toggler" className={`btn btn-${theme==="light"?"dark":"light"} txt-${theme==="light"?"dark":"light"}`}>{`Toggle local theme to ${theme==="light"?"dark":"light"}`}</button>
    </div>
)
}

export {LocalThemedBox}