import React from 'react';
import CategorySection from './Component/Category/Category';
import { BrowserRouter as Router } from "react-router-dom";
import AboutSection from './Component/About/About';
import BlogSection from './Component/Blog/Blog';

function App() {
  return (
   <div>
        <Router>
          <CategorySection/>
          <AboutSection/>
          <BlogSection/>
        </Router>
   </div>
   
  );
}

export default App;
