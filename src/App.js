import React from 'react';
import './App.css'
import Home from  './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/About/profile';
import Allcource from './Pages/Allcources/Allcource';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Science from './Component/SidebarPages/Science/Science';
import Math from './Component/SidebarPages/Security/security';
import Devops from './Component/SidebarPages/Devops/Devops';
import Gamedevelopment from './Component/SidebarPages/Gamedevelopment/Gamedevelopment';
import Cource from './Pages/Cource/Cource';
import EduSelect from './Pages/EDU_select/EduSelect';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cource' element={<Allcource></Allcource>} />
          <Route path='/suggestion' element={<EduSelect></EduSelect>} />
          <Route path='/cource/:courseName' element={<Cource></Cource>} />
          <Route path='/cource/development' element={<Science></Science>} />
          <Route path='/cource/security' element={<Math></Math>} />
          <Route path='/cource/devops' element={<Devops></Devops>} />
          <Route path='/cource/gamedevelopment' element={<Gamedevelopment></Gamedevelopment>} />
        </Routes>
      </Router>
    </div>

    // <Event />

   
  );
}


export default App;