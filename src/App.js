import React from 'react';
import './App.css'
import Home from  './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Index from './Component/temp/Index';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Index' element={<Index />} />
        </Routes>
      </Router>
    </div>

    // <Event />

   
  );
}


export default App;