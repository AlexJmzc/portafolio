import React, { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Home from './componentes/home/Home';
import About from './componentes/about/About';
import Skills from './componentes/skills/Skills';
import Contact from './componentes/contact/Contact';
import Work from './componentes/work/Work';

function App() {
  const[languaje, setLanguaje] = useState({name: 'English'});

  return (
    <>
    <Header languaje={languaje} setLanguaje={setLanguaje}/>

    <main className='main'>
      <Home languaje={languaje}/>
      <Work languaje={languaje}/>
      <About languaje={languaje}/>
      <Skills languaje={languaje}/>
      <Contact languaje={languaje}/>
    </main>
    </>
  )
}

export default App;
