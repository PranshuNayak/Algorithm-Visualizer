import React from 'react'
import uuid from 'react-uuid'
function ArraySwap({array,idx_1,idx_2}) {
  const style = (color)=>{
    let style={
      border:"0.5px solid black",
      backgroundColor:color,
      fontSize:"20px",
      padding:"2px"
    }
    return style
  }
  let count=-1;
  return (
    <>
        {
            array.map((ele)=>{
                count++;
                if(count==idx_1 || count==idx_2)
                return <div className="text-center mx-1 col" style={style("red")} key={uuid()} >{ele}</div>
                return <div className="text-center mx-1 col" style={style("#fed7d7")} key={uuid()}>{ele}</div>
            })
        }
    </>
  )
}

export default ArraySwap