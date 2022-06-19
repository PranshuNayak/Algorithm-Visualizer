import React,{useState,useContext} from 'react'
import { VisualizerContext } from '../context/Visualizer'
import backward from "../images/ant-design_backward-outlined.svg";
import forward from "../images/ant-design_forward-outlined.svg";
function VisualizerForm() {
  const {array,size,getArray,setArray,setSize} = useContext(VisualizerContext)
  
  return (
    <>
    <div className="col-12 d-flex justify-content-center">
          <ul className="list-group-horizontal list-group">
            <li className="list-group-item bg-transparent border-0 " >
              <img src={backward} alt="" />
            </li>
            <li className="list-group-item bg-transparent border-0">
              Visualizer
            </li>
            <li className="list-group-item bg-transparent border-0 " >
              <img src={forward} alt="" />
            </li>
            
          </ul>
        </div>
      
        <div className="col-12 ">
          <div className="row justify-content-center align-items-center my-2">
            <div className="col-4">Array Size:</div>
            <input type="number" name="arraysize" className="col-6 border" value={size} onChange={(e)=>{setSize(e.target.value)}} />
          </div>
          <div className="row justify-content-center align-items-center my-2 ">
            <div className="col-4">Array Size:</div>
            <input type="text" name="arraysize" className="col-6 border" value={array} onChange={(e)=>{setArray(e.target.value)}} />
          </div>
          <div className="row justify-content-center align-items-center my-2">
            <div className="col-4 text-left">
              <button className="btn btn-danger" onClick={getArray}>Submit</button>
            </div>
            <div className="col-6"></div>
          </div>
        </div>

    </>
  )
}

export default VisualizerForm