import React from 'react';
import './App.css'
import Home from  './Pages/Home/Home';
// import SignInSignUp from  './SignInSignUp/SignInSignUp';


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>

    // <Event />

   
  );
}


export default App;