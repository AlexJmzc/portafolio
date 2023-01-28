import React from 'react';
import './App.css';
import Header from './componentes/header/header';
import Home from './componentes/home/Home';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
       <Home />
    </main>
    </>
  )
}

export default App;
