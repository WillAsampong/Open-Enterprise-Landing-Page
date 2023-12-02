import './App.css'
import Cards from './Components/Cards Section/Cards'
import Hero from './Components/Hero Section/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto">
        <Hero />
        <Cards />
      </div>
    </>
  )
}

export default App
