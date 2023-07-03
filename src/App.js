import './assests/style.css'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
// import { Media } from './components/Media';
import {Navbar} from './components/Navbar.js'
import { Projects } from './components/Projects';
import { Skills } from './components/Skills'

function App() {
  return (
   <>

    <>
     
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    
    </>

    
   
   </>
  );
}

export default App;
