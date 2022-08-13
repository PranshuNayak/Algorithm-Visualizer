import React from 'react'

function IconWithSubtitle({item}) {
  return (
    <div className="row">
        <div className="col-12 text-center">
            {
              item.href ? <a href={item.href} target="blank"><img src={item.icon} width={50} height={50} alt="logo" /></a> : <img src={item.icon} width={50} height={50} alt="logo" />
            }
        </div>
        <div className="col-12 text-center">
            {item.text}
        </div>
    </div>
  )
}

export default IconWithSubtitle