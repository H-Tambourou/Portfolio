import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Welcome from './components/Welcome';

import './App.css';
import './responsive.css';


function App() {
  return (
    <div className="App">
      <Welcome/>
      <Nav/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
