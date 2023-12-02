import './App.css'
import Cards from './Components/Cards Section/Cards'
import Features from './Components/Features Section/Features'
import Hero from './Components/Hero Section/Hero'
import Navbar from './Components/Navbar/Navbar'
import Tasks from './Components/Tasks Section/Tasks'

function App() {

  return (
    <>
      <Navbar />
      <div className="w-11/12 mx-auto flex flex-col gap-y-10">
        <Hero />
        <Cards />
        <Features />
        <Tasks />
      </div>
    </>
  )
}

export default App
