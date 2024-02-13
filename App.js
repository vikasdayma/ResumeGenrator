import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Resume from './Components/Resume';
function App() {
  return (
    <div className="App">


<Navbar></Navbar>
  <Routes> <Route path='/' element={<Header/>}/> </Routes>
  <Routes> <Route path='resume' element={<Resume/>}/> </Routes>

    </div>
    
  );
}

export default App;
