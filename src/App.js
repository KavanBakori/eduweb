import React from 'react';
import './App.css'
import Home from  './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Allcources from '../src/Component/allcourses/allcourses';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Profile from './Component/profile/profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/allcources' element={<Allcources />} />
        </Routes>
      </Router>
    </div>

    // <Event />

   
  );
}


export default App;