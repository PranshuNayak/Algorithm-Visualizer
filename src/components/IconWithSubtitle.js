import React from 'react'

function IconWithSubtitle({icon,text}) {
  return (
    <div className="row">
        <div className="col-12 text-center">
            <img src={icon} width={50} height={50} alt="logo" />
        </div>
        <div className="col-12 text-center">
            {text}
        </div>
    </div>
  )
}

export default IconWithSubtitle