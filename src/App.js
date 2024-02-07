import React from 'react';
import Home from './Pages/Home/Home'

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