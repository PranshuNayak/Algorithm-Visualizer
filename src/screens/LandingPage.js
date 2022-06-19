import React from 'react'
import Discover from '../components/Discover'
import Algorithms from '../components/Algorithms'
import Contribute from '../components/Contribute'
import Home from '../components/Home'

function LandingPage() {
  return (
     <div className="row px-5">
        <Home/>
        <Algorithms/>
        <Discover/>
        <Contribute/>
     </div>
  )
}

export default LandingPage