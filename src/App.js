import React from 'react';
import './App.css'
import Home from  './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Allcource from './Pages/Allcources/Allcource';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Science from './Component/SidebarPages/Science/Science';
import Math from './Component/SidebarPages/Math/Math';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/cource' element={<Allcource></Allcource>} />
          <Route path='/cource/development' element={<Science></Science>} />
          <Route path='/cource/security' element={<Math></Math>} />
         
        </Routes>
      </Router>
    </div>

    // <Event />

   
  );
}


export default App;