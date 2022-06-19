import React from 'react'
import Curved from './Curved'
import Hero from './Hero'
import Navbar from './Navbar'

function Home() {
  return (
    <div className="col-12 d-flex position-relative  vh-100" id="home">
        <Curved/>
        <div className="row flex-grow-1">
        <Navbar/>
        <Hero/>
      </div>
    </div>
  )
}

export default Home