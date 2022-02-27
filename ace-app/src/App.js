import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home'


function App() {
  return (
    <Router>
      <div className="container">
        <Header title='Ace - Dynamic Coding Ennviorment'/>
        <Route path='/' component={Home}></Route>
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
