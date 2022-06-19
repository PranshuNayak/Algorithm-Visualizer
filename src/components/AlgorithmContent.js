import React from 'react'

function AlgorithmContent({heading,text}) {
    const style = {
        backgroundColor:"#E8B4B4",
        opacity:'0.36',
        borderRadius:'30px',
    }
  return (
        <div id={heading} style={style} className="p-3 my-2 shadow my-5">
            <p className='h3 text-center text-capitalize'>{heading}</p>
            {
                heading==="code" ? <div> <img src={text}/> </div> : <p>{text}</p>
            }
        </div>
  )
}

export default AlgorithmContent