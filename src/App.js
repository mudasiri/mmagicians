import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/home';
import Quote from './components/quote';
import './App.css';

function App() {
  return (
    <>
    <div className='nav-bar'>
      <nav>
        <h3 className='logo'>Welcome to Math Magicians</h3>
        <ol className='nav-list'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/calculator'}>Calculator</Link></li>
          <li><Link to={'/quote'}>Quote</Link></li>
        </ol>
      </nav>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/calculator' element={<Calculator/>} />
      <Route path='/quote' element={<Quote/>} />
    </Routes>
    </>
  );
}

export default App;
