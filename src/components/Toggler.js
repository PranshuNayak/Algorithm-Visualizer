import React from 'react'
import styled from 'styled-components'
import cross from '../images/akar-icons_cross.svg'
import {Link} from 'react-router-dom'
function Toggler({width,handleWidth}) {
  const Wrapper = styled.div`
  height:100vh;
  width:${({width})=>(width)};
  z-index:4000;
  position:fixed;
  right:0;
  top:0;
  background-color:#9E5454;
  color:white;
  transition:"width 2s ease";
  `
  return (
    <Wrapper width={width}>
        <div className="row mt-2 mx-2 justify-content-end">
            <div className="col-6 text-right">
                <img src={cross} alt="toggler-cross" className='text-light' onClick={handleWidth} />
            </div>
        </div>
        <div className="row mt-5 mx-2 text-light">
            <div className="col-12 border-bottom mb-2 text-left">
                <Link className='text-light' to="/merge-sort">Merge Sort</Link>
            </div>
            <div className="col-12 border-bottom mb-2 text-left">
            <Link className='text-light' to="/selection-sort">Selection Sort</Link>
            </div>
            <div className="col-12 border-bottom mb-2 text-left">
            <Link className='text-light' to="/insertion-sort">Insertion Sort</Link>
            </div>
            <div className="col-12 border-bottom mb-2 text-left">
                Quick sort
            </div>
            <div className="col-12  mb-2 text-left">
            <Link className='text-light' to="/bubble-sort">Bubble Sort</Link>
            </div>
        </div>
    </Wrapper>
  )
}

export default Toggler