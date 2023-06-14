import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path ='/' element={<Home />}/>
          <Route path ='/about' element={<About />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  )
}

export default App
