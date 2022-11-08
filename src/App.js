import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import Main from './Components/Main';
import './Components/style.css';

function App() {
  return (
   <BrowserRouter>
      <AppRouter/>
   </BrowserRouter>
  );
}

export default App;