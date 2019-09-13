import React from 'react';
import './App.css';
import Menu from './components/menu';
import Grid from './components/grid';
import LogoImage from './components/menu/logo.jpg';

function App() {
  return (
    <div>
      <Menu LogoImage = {LogoImage} position = 'left' />
      <Grid />
    </div>
  );
}

export default App;
