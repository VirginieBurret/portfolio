import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/index';
import Typewriter from './Components/Typewriter/index';
import About from './Pages/About/index';
//import Skills from './Pages/Skills/skills';
//import Projects from './Pages/Projects';

function App() {

  return (
    
   <div className="app" >
    <Typewriter/>
    <Navbar/>
    <Home />
    <About/>
  
    </div>
  );
}

export default App;

