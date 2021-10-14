import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Featured from './components/Featured';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <Welcome/>
      <Nav/>
      <About/>
      <Featured/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
