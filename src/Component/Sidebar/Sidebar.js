import React from 'react'
import { Container, Content } from './Sidebarcss'
import {
  FaTimes,
  FaHome,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../../Component/SidebarItem/SidebarItem';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ active }) => {
  const navigate=useNavigate();
  const closeSidebar = () => {
    active(false)
  }
  const handleHome=()=>{
    navigate('/cource/security');
  }
  const handleDevelopment=()=>{
    navigate('/cource/development');
  }
  const handleGamedevelopment=()=>{
    navigate('/cource/gamedevelopment');
  }
  const handledevops=()=>{
    navigate('/cource/devops');
  }
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <div onClick={handleHome}><SidebarItem Icon={FaHome} Text="Security" /></div>
        <div onClick={handleDevelopment}><SidebarItem Icon={FaChartBar} Text="Development" /></div>
        <div onClick={handleGamedevelopment}><SidebarItem Icon={FaHome} Text="GameDevelopment" /></div>
        <div onClick={handledevops}><SidebarItem Icon={FaChartBar} Text="Devops" /></div>
      </Content>
    </Container>
  )
}

export default Sidebar;