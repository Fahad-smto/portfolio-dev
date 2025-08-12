import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './index.css'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <Education></Education>
      
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
