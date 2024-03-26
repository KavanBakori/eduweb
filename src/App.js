import React from 'react';
import './App.css'
import Home from  './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Profile from './Pages/About/profile';
import Allcource from './Pages/Allcources/Allcource';
import Courseupload from './Pages/courseupload/courseupload';
import Allsuggetions from './Pages/allsuggetions/allsuggetions';
import Studentsuggetion from './Pages/suggestion/suggestion';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Aboutus from './Pages/Aboutus/aboutus';
// import Science from './Component/SidebarPages/Science/Science';
// import Math from './Component/SidebarPages/Security/security';
// import Devops from './Component/SidebarPages/Devops/Devops';
// import Gamedevelopment from './Component/SidebarPages/Gamedevelopment/Gamedevelopment';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/suggetion' element={<Studentsuggetion />} />
          <Route path='/allsuggetion' element={<Allsuggetions />} />
          <Route path='/courseupload' element={<Courseupload />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/cource' element={<Allcource></Allcource>} />
          {/* <Route path='/cource/development' element={<Science></Science>} />
          <Route path='/cource/security' element={<Math></Math>} />
          <Route path='/cource/devops' element={<Devops></Devops>} />
          <Route path='/cource/gamedevelopment' element={<Gamedevelopment></Gamedevelopment>} /> */}
        </Routes>
      </Router>
    </div>

    // <Event />

   
  );
}


export default App;