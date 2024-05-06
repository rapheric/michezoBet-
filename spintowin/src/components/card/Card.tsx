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
            <ListDark>
                    6
            </ListDark>
            <ListStyles>
                    9
            </ListStyles>
            <ListStyles>
                    12
            </ListStyles>
            <ListDark>
                    15
            </ListDark>
            <ListStyles>
                    18
            </ListStyles>
            <ListStyles>
                    21
            </ListStyles>
             <ListDark>
                    24
            </ListDark>
            <ListStyles>
                    27
            </ListStyles>
            <ListStyles>
                    30
            </ListStyles>
            <ListDark>
                    33
            </ListDark>
            <ListStyles>
                    36
            </ListStyles>
            <ListDark>
                    2
            </ListDark>
            <ListStyles>
                    5
            </ListStyles>
            <ListDark>
                    8
            </ListDark>
            <ListDark>
                    11
            </ListDark>
            <ListStyles>
                    14
            </ListStyles>
            <ListDark>
                    17
            </ListDark>
            <ListDark>
                    20
            </ListDark>
             <ListStyles>
                    23
            </ListStyles>
            <ListDark>
                    26
            </ListDark>
            <ListDark>
                    29
            </ListDark>
            <ListStyles>
                    32
            </ListStyles>
            <ListDark>
                    35
            </ListDark>
            <ListStyles>
                    1
            </ListStyles>
            <ListDark>
                    4
            </ListDark>
            <ListStyles>
                    7
            </ListStyles>
            <ListDark>
                    10
            </ListDark>
            <ListDark>
                    13
            </ListDark>
            <ListStyles>
                    16
            </ListStyles>
            <ListStyles>
                    19
            </ListStyles>
             <ListDark>
                    22
            </ListDark>
            <ListStyles>
                    25
            </ListStyles>
            <ListDark>
                    28
            </ListDark>
            <ListDark>
                    31
            </ListDark>
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
    background-color:#A9A9A9;
  }
`;

const ListDark = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  margin:0px;
  width :50px;
  height: 50px;
  background-color:black;
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
    background-color:#A9A9A9;

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
    background-color:#A9A9A9;
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
    background-color:#A9A9A9;
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