import React, {Component} from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import './css/style.css';


class App extends Component {
  render(){
    return (
      <div>
        <Navbar />
        <Header title="Maribel Araiza-Cañedo" />
        <About />
        <Projects />
        <Skills />
      </div>
      ); 

  }
}

export default App;
