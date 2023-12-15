import React,{useContext} from 'react'
import '../styles/App.css';
import { ThemeProvider,ThemeContext } from './ThemeProvider';
import { ThemeToggleButton } from './ThemeToggleButton';
import { Page } from './Page';
const App = () => {
  
  // const{theme,changeTheme} = useContext(ThemeContext);
  return (
    <div id="main">
      <ThemeProvider>
        <Page />
        <ThemeToggleButton />
      </ThemeProvider>
    </div>
  )
}


export default App;
