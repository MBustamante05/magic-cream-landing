import About from './Components/About'
import Hero from './Components/Hero'

function App() {
  return (
    <div className='px-10 py-2'>
      <section id='home'>
        <Hero />
      </section>
      <section id='about'>
        <About />
      </section>
    </div>
  )
}

export default App