import React from 'react'
import charmNut from '../images/charm_nut.svg'
import education from '../images/carbon_education.svg'
import { Link  } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
function Navbar() {
  return (
    <div className="col-12 py-2 ">
        <div className="row">
            <div className="col-2 d-flex align-items-center justify-content-evely">
              <Link to='/' className='text-dark'>
              <img width={50} height={50} src={charmNut} alt="app-logo" />
              <span>ALGOs</span>
              </Link>

            </div>

            <div className="col d-flex justify-content-center align-items-center">
                <ul className=" list-group list-group-horizontal w-50 justify-content-between">
                    <li className="list-group"><ScrollLink spy={true} smooth={true} offset={0} duration={500} to="home" className='text-dark'>Home</ScrollLink></li>
                    <li className="list-group"><ScrollLink spy={true} smooth={true} offset={0} duration={500} to="algorithms" className='text-dark'>Algorithms</ScrollLink></li>
                    <li className="list-group"><ScrollLink spy={true} smooth={true} offset={-20} duration={500} to="discover" className='text-dark'>Discover</ScrollLink></li>
                    <li className="list-group"><ScrollLink spy={true} smooth={true} offset={0} duration={500} to="contribute" className='text-dark'>Contribute</ScrollLink></li>
                    <li className="list-group"><ScrollLink spy={true} smooth={true} offset={0} duration={500} to="contact" className='text-dark'>Contact</ScrollLink></li>
                </ul>
            </div>
            <div className="col-1">
                <img width={40} height={40} src={education} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Navbar