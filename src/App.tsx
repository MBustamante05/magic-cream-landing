import About from './Components/About'
import Hero from './Components/Hero'
import Products from './Components/Products'

function App() {
  return (
    <div className='py-2'>
      <section id='home' className='px-10'>
        <Hero />
      </section>
      <section id='about' className='px-10'>
        <About />
      </section>
      <section id="product">
        <Products />
      </section>
    </div>
  )
}

export default App