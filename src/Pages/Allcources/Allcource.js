import React, { useState } from 'react'
import { Container } from './Allcourcecss';
import { FaBars } from 'react-icons/fa'
import Sidebar from '../../Component/Sidebar/Sidebar';
import  Search  from '../../Component/search/search';
import './Allcources.css'
import Navbar from '../../Component/Navbar/Navbar'
const Header = () => {
  const [sidebar, setSidebar] = useState(true)
  const showSiderbar = () => setSidebar(!sidebar)
  return (
    <>
      <Navbar></Navbar>
      <div className='allcources'>

        <Container>
          {/* <FaBars onClick={showSiderbar} /> */}
          {sidebar && <Sidebar active={setSidebar} />}
          <Search/>
        </Container>

      </div>
    </>
  )
}

export default Header;