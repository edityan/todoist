import React from 'react'
import Header from '../../components/Header'
import Main from '../../components/Main'

const Home = () => {
  return (
    <div style={{ height: '100vh', display: "flex", flexDirection: 'column' }}>
      <Header />
      <Main />
    </div>
  )
}

export default Home