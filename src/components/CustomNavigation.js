import React,{useState} from 'react'
import charmNut from '../images/charm_nut.svg'
import menu from '../images/eva_menu-fill.svg'
import { Link  } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import Toggler from './Toggler'
function Navbar({name}) {
    const [width,setWidth] = useState("0px")
    const handleWidth = ()=>{
        if(width==="0px")
        setWidth("230px")
        else setWidth("0px")
    }
    return(
        <div className="row align-items-center my-3">
    <div className="col-2 d-flex align-items-center justify-content-evely">
    <Link to='/' className='text-dark'>
      <img width={50} height={50} src={charmNut} alt="app-logo" />
      <span>ALGOs</span>
      </Link>
    </div>
    <div className="col-2 fs-1 font-weight-bold text-capitalize">
    {name}
    </div>
    <div className="col d-flex justify-content-center align-items-center">
        <ul className=" list-group list-group-horizontal w-50 justify-content-between">
        <li className="list-group"><ScrollLink spy={true} smooth={true} offset={50} duration={500} to="overview" className='text-dark'>Overview</ScrollLink></li>
            <li className="list-group"><ScrollLink spy={true} smooth={true} offset={50} duration={500} to="code" className='text-dark'>Code</ScrollLink></li>
            <li className="list-group"><ScrollLink spy={true} smooth={true} offset={50} duration={500} to="analysis" className='text-dark'>Analysis</ScrollLink></li>
            <li className="list-group"><ScrollLink spy={true} smooth={true} offset={50} duration={500} to="visualizer" className='text-dark'>Visualizer</ScrollLink></li>
        </ul>
    </div>
    <div className="col-1">
        <img width={40} height={40} src={menu} alt="" onClick={handleWidth} />
    </div>
    <Toggler width={width} handleWidth={handleWidth} />
</div>
    )
}

export default Navbar