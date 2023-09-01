import './App.css'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';

import { Brand, CTA, NavBar } from './components';

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar></NavBar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <WhatGPT3></WhatGPT3>
      <Features></Features>
      <Possibility></Possibility>
      <CTA></CTA>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  )
}

export default App
