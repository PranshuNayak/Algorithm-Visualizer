import React,{useContext,useReducer,useState} from 'react'
import { VisualizerContext } from '../context/Visualizer'
import uuid from 'react-uuid'
import FadeIn from 'react-fade-in';
import PartitionArray from "./PartitionArray";
import MergeArray from "./MergeArray";
import ArraySwap from './ArraySwap'
 
function VisualizerArea() {
  const {name,result} = useContext(VisualizerContext)

  
  const reducer = (state,action)=>{
    switch(action){
      case "next": {
        if(state===0)
        return state;
        return(state+1)
      }
      case "previous":{
        if(state===0)
        return state
        return(state-1)
      }
      default: return state;
    }
  }

  const [current,dispatch] = useReducer(reducer,0);

  

  if(name==="mergesort")
  return(<>
  <div className="col-12 d-flex flex-column">
          {
            Object.keys(result).length ? result.answer.arr_1.map((level)=>(
              
                <div className="row justify-content-center align-items-center my-2" key={uuid()} >
                {
                  level.map((arr)=>{
                    if(typeof(arr)!=="undefined"){
                      return(
                        <div className="col d-flex justify-content-center" key={uuid()} >
                          
                      <PartitionArray array={arr} size={arr.length}/>
                      
                    </div>
                      )
                    }
                  }
                    
                  )
                }
              </div>
            
            )) :  <></>
          }
        </div>
        

       
        <div className="col-12 d-flex flex-column-reverse">
        
          {
            Object.keys(result).length ? result.answer.arr_2.map((level)=>(
              <div className="row justify-content-center align-items-center my-2" key={uuid()}>
                {
                  level.map((arr)=>{
                    if(typeof(arr)!=="undefined"){
                      return(
                        <div className="col d-flex justify-content-center"  >
                           
                        <MergeArray array={arr} />
                        
                    </div>
                      )
                    }
                  }
                   
                  )
                }
              </div>
            )) :  <></>
          }
        </div>
        
      
  </>)

  return(
    <div className="col-12">
      
    {
      
      Object.keys(result).length ? 
        
          result.answer.map(({arr,swap})=>{
          
            return(
              <div className="row justify-content-center align-items-center my-2"  key={uuid()}>
                <ArraySwap array={arr} idx_1={swap[0]} idx_2={swap[1]} key={uuid()} />
              </div>
            )
           
          })
        
       : <></>
    }
    </div>
  )
}

export default VisualizerArea