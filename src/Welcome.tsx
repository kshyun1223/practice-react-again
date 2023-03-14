import React from 'react';
import styled from 'styled-components'
import SquirtleSrc from '../public/asset/squirtle.png'

export default function Welcome(){
  return (
    <Container>
      <h1>No CRA!!!</h1>
      <Squirtle src={SquirtleSrc} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Squirtle = styled.img`
  
`

