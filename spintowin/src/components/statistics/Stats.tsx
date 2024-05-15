import React from 'react'
import styled from '@emotion/styled'

interface Options{
  selectedOption:string|null;
}

const Stats: React.FC <Options> = ({selectedOption}) => {
  return (
    <StyledEvent>
        <p>Event #332({selectedOption})</p>
    </StyledEvent>
  )
}
const StyledEvent = styled.div`
background-color:brown;
width:100%;
font-size:12px;
color:white;
`
export default Stats
