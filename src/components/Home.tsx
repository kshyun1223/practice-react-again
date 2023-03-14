import React from 'react';

import styled from 'styled-components'
import SquirtleSrc from '../../public/asset/squirtle.png'

export default function Home(){
  
  return (
    <Container>
      <h1>No CRA!!!</h1>
      <Squirtle src={SquirtleSrc} />
    </Container>
  )
}

const Container = styled.div`
`

const Squirtle = styled.img`
`

