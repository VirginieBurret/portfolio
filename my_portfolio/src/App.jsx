import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/index';
import Typewriter from './Components/Typewriter/index';
import About from './Pages/About/index';
import Skills from './Pages/Skills/skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
function App() {

  return (
    
   <div className="app" >
   
    <Navbar/>
    <Home />
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}

export default App;

