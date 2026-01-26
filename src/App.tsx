import About from './Components/About'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import Products from './Components/Products'

function App() {
  return (
    <div className='py-2'>
      <section id='home' className='px-4 md:px-10'>
        <Hero />
      </section>
      <section id='about' className='px-4 md:px-10'>
        <About />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="contact" className='px-4 md:px-10'>
        <Contact />
      </section>
    </div>
  )
}

export default App