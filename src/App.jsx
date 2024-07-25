import Navbar from "./components/Navbar"
import Hero from './components/Hero'
import Characters from "./components/Characters"
import OurHistory from './components/OurHistory'
import RandomImage from "./components/RandomImage"
const App =()=> {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero/>
      <Characters/>
      <OurHistory/>
      <RandomImage/>
    </div>
    
    </>
  )
}

export default App