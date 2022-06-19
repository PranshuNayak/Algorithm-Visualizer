import React from 'react'
import styled from 'styled-components'

function MergeArray({array}) {
  const ArrayElement = styled.div`
  width:40px;
  height:40px;
  border:0.5px solid black;
  font-size:25px;
  text-align:center;
  background-color:red
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
              return(<ArrayElement backgroundColor="red">{ele}</ArrayElement>)
            })
        }
    </div>
  )
}

export default MergeArray