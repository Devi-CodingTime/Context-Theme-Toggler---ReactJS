import React from 'react'
import '../styles/App.css';
import { ThemeProvider,ThemeContext } from './ThemeProvider';
import { ThemeToggleButton } from './ThemeToggleButton';
import { Page } from './Page';
const App = () => {

  return (
    <div id="main">
      <ThemeProvider.Provider>
        <Page />
        <ThemeToggleButton />
      </ThemeProvider.Provider>
    </div>
  )
}


export default App;
