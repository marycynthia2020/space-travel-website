import React from 'react'
import Hero from '../components.jsx/Hero'
import Navbar from '../components.jsx/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-homeMobile md:bg-homeTablet xl:bg-homeDesktop bg-no-repeat bg-center bg-cover'>
       <Navbar />
      <Hero />
    </div>
  )
}

export default Home