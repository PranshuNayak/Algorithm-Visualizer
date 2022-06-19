import React from 'react'
import styled from 'styled-components'
import downarrow from '../images/akar-icons_arrow-down.svg'
function PartitionArray({array,size}) {
  const ArrayElement = styled.div`
  width:40px;
  height:40px;
  border:0.5px solid black;
  font-size:25px;
  text-align:center;
  background-color:red
  
  `
  const Divider = styled.div`
  display:flex;
  flex-flow:column wrap;
  width:50px;
  height:70px;
  justify-content:center;
  align-items:center;
  `
  const style={
    border:"2px solid black",
    padding:"5px"
  }
  let count=-1;
  return (
    <div className="d-flex align-items-center" style={style}>
        {
            
            array.map((ele)=>{
              count++;
              if(count==(Math.floor(size/2))){
                if(count==0)
                return(<ArrayElement >{ele}</ArrayElement>)
                return(<Divider>
                  <div>
                    <img src={downarrow} alt="" />
                  </div>
                  <ArrayElement >{ele}</ArrayElement>
                </Divider>)
                
              }

              if(count<(Math.floor(size/2)))
              return(
                <ArrayElement >{ele}</ArrayElement>
              )

              if(count>(Math.floor(size/2)))
              return(
                <ArrayElement >{ele}</ArrayElement>
              )
            })
        }
    </div>
  )
}

export default PartitionArray