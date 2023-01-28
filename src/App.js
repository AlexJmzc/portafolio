import React from 'react';
import './App.css';
import Header from './componentes/header/header';
import Home from './componentes/home/Home';
import About from './componentes/about/About';
import Skills from './componentes/skills/Skills';
import Contact from './componentes/contacto/Contact';
import Work from './componentes/work/Work';

function App() {
  return (
    <>
    <Header/>

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
    </>
  )
}

export default App;
