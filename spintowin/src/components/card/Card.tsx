import React from 'react'
import styled from '@emotion/styled';
import Random from '../random/Random'
import Footer from '../footer/Footer'

const Card = () => {
  return (
    <CardContainer>
    <Random/>
    <Footer/>
    </CardContainer>
  )
}
const CardContainer = styled.div`
// display:flex;
// flex-direction:column;
align-items:center;
justify-content:center;
margin-left:50px;
`
export default Card