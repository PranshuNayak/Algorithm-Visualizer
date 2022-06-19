import React from 'react'
import styled from 'styled-components'

const Oval = styled.div`
height: 798px;
width: 1160px;
border-radius:50%;
position:absolute;
background-color:#EEC7C7;
top:-75%;
left:35%;
`

function Curved() {
  return (
    <Oval/>
  )
}

export default Curved