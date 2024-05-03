import React from 'react';
import styled from '@emotion/styled';
import {  faArrowRotateRight, faRotateLeft ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = () => {
    
  return (
    <CardWrapper>
    <CardContainer>
        <div>
        <ZeroItem>
          0
         </ZeroItem>
        </div>
    <div>
        <ContainerStyles>
            <ListStyles>
                    3
            </ListStyles>
            <ListStyles>
                    6
            </ListStyles>
            <ListStyles>
                    9
            </ListStyles>
            <ListStyles>
                    12
            </ListStyles>
            <ListStyles>
                    15
            </ListStyles>
            <ListStyles>
                    18
            </ListStyles>
            <ListStyles>
                    21
            </ListStyles>
             <ListStyles>
                    24
            </ListStyles>
            <ListStyles>
                    27
            </ListStyles>
            <ListStyles>
                    30
            </ListStyles>
            <ListStyles>
                    33
            </ListStyles>
            <ListStyles>
                    36
            </ListStyles>
            <ListStyles>
                    2
            </ListStyles>
            <ListStyles>
                    5
            </ListStyles>
            <ListStyles>
                    8
            </ListStyles>
            <ListStyles>
                    11
            </ListStyles>
            <ListStyles>
                    14
            </ListStyles>
            <ListStyles>
                    17
            </ListStyles>
            <ListStyles>
                    20
            </ListStyles>
             <ListStyles>
                    23
            </ListStyles>
            <ListStyles>
                    26
            </ListStyles>
            <ListStyles>
                    29
            </ListStyles>
            <ListStyles>
                    32
            </ListStyles>
            <ListStyles>
                    35
            </ListStyles>
            <ListStyles>
                    1
            </ListStyles>
            <ListStyles>
                    4
            </ListStyles>
            <ListStyles>
                    7
            </ListStyles>
            <ListStyles>
                    10
            </ListStyles>
            <ListStyles>
                    13
            </ListStyles>
            <ListStyles>
                    16
            </ListStyles>
            <ListStyles>
                    19
            </ListStyles>
             <ListStyles>
                    22
            </ListStyles>
            <ListStyles>
                    25
            </ListStyles>
            <ListStyles>
                    28
            </ListStyles>
            <ListStyles>
                    31
            </ListStyles>
            <ListStyles>
                    34
            </ListStyles>
        </ContainerStyles>
        <ContainerStyles>
            <ListItems>
                1 ~ 12 
            </ListItems>
            <ListItems>
                13 ~ 24
            </ListItems>
            <ListItems>
                25 ~ 36
            </ListItems>
        </ContainerStyles>
    </div>
    <ButtonContainer>
      <StyledButton><FontAwesomeIcon icon={faArrowRotateRight} /></StyledButton>
      <StyledButton>x2</StyledButton>
      <StyledButton><FontAwesomeIcon icon={faRotateLeft} /></StyledButton>
      <StyledButton><FontAwesomeIcon icon={faTrashCan} /></StyledButton>
    </ButtonContainer>
    </CardContainer>
    <div>
    <ContainerStyles>
            <NumberItems>
                LOW
            </NumberItems>
            <NumberItems>
                EVEN
            </NumberItems>
            <NumberItems>
                
            </NumberItems>
            <NumberItems>
                 
            </NumberItems>
            <NumberItems>
                ODD
            </NumberItems>
            <NumberItems>
                HIGH
            </NumberItems>
        </ContainerStyles>
    </div>
    </CardWrapper>
  )
}
const ListStyles = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  margin:0px;
  width :50px;
  height: 50px;
  background-color:red;
  font-size: 20px;
  list-style:none;
  border: 2px solid white;
  margin-left:0px;
  &:hover {
    border:2px solid yellow;
    background-color:gray;
  }
`;
const ContainerStyles = styled.ul`
  font-family: Arial, sans-serif;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
  width:100%;
  max-width:680px;
  margin-bottom:0px;
  margin:0px;
  padding:0px;
  margin-left:0px;
`;
// const DivStyles = styled.div`
// display:flex;
// align-items:center;
// justify-content: center;
// `
const ListItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  width :212px;
  height: 45px;
  font-size: 20px;
  list-style:none;
  margin-top:0px;
  margin:0px;
  border: 2px solid white;
  &:hover {
    border:2px solid yellow;
    background-color:light-gray;

  }
`;

const ZeroItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  width : 50px;
  height: 154px;
  font-size: 20px;
  list-style:none;
  margin-top:0px;
  margin:0px;
  padding:0px;
  gap:0px;
  margin-right:0px;
  border: 2px solid white;
  &:hover {
    border:2px solid yellow;
  }
`;
const CardContainer = styled.div`
display:flex;
gap:0px;
justify-content:center;
width:100%;
max-width:800px;
`
const ButtonContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const CardWrapper = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
gap:30px;
margin-right:0px;
`
const NumberItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  width :104px;
  height: 45px;
  font-size: 20px;
  list-style:none;
  margin-top:0px;
  margin:0px;
  border: 2px solid white;
  &:hover {
    border:2px solid yellow;
  }
`
// Styled button component
const StyledButton = styled.button`
  padding: 10px 10px;
  margin: 5px;
  border: none;
  border-radius: 50%;
  font-size: 12px;
  cursor: pointer;
  background-color:#AD5765 ;
  color:#D6A0A9;
  &:hover {
    background-color: #F4E5E8;
  }
`;
export default Card