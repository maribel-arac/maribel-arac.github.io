import React from 'react';
import './css/style.css';


function App() {
  return (
    <div className="App">
      <nav> 
        <ul className="nav-menu">
          <li><a className="nav-menu__link" href="#"> 🏠 Home </a></li>
          <li><a className="nav-menu__link" href="#"> 😊 About</a></li>
          <li><a className="nav-menu__link" href="#"> 💼 Projects</a></li>
          <li><a className="nav-menu__link" href="#"> 🔧 Skills</a></li>
          <li><a className="nav-menu__link" href="#">📞 Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
