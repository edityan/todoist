import React from 'react'
import Sidebar from '../Sidebar'
import Content from '../Content'
import './index.css'

const Main = () => {
  return (
    <div className='main-wrapper'>
        <Sidebar />
        <Content />
    </div>
  )
}

export default Main