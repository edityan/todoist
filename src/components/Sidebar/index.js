import React from 'react'
import './index.css'
import Menu from '../Menu'
import Project from '../Project'

const Sidebar = () => {

  return (
    <div className='sidebar-wrapper'>
      <Menu />
      <Project />
    </div>
  )
}

export default Sidebar