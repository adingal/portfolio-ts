import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
