import React, { useState ,  } from 'react'
import { Container } from './Allcourcecss';
import { FaBars } from 'react-icons/fa'
import Sidebar from '../../Component/Sidebar/Sidebar';
import Search from '../../Component/search/search';
import './Allcources.css'
import Navbar from '../../Component/Navbar/Navbar'
import Cources from '../../Component/Cources/Cources'
import { useNavigate } from 'react-router';


const Header = () => {
  const [sidebar, setSidebar] = useState(true)
  const Nevigate = useNavigate();
  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
      <Navbar></Navbar>
      <div className='allcources'>

        <Container>
          {/* <FaBars onClick={showSiderbar} /> */}
          {sidebar && <Sidebar active={setSidebar} />}
          <Search />
        </Container>

        <div className='All_courses' >

          

          <Cources/>
        

        </div>
        </div>
      </>
      )
}

      export default Header;