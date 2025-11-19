import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import Trusted from './components/Trusted'
import UseCases from './components/UseCases'
import WhyChooseUs from './components/WhyChooseUs'
import ContactCTA from './components/ContactCTA'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <Trusted />
        <UseCases />
        <WhyChooseUs />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App