import React from 'react';
import styled from '@emotion/styled';

const Card = () => {
    
  return (
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
  )
}
const ListStyles = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
  margin:0px;
  width :58px;
  height: 40px;
  background-color:red;
  font-size: 20px;
  list-style:none;
  border: 1.5px solid white;
  margin-left:0px;
  &:hover {
    background-color:blue;
  }
`;
const ContainerStyles = styled.ul`
  font-family: Arial, sans-serif;
  display:flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content: center;
  width:100%;
  max-width:760px;
  margin-bottom:0px;
  border: 1.5px solid white;
  margin:0px;
  padding:0px;
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
  width :238px;
  height: 40px;
  background-color:red;
  font-size: 20px;
  list-style:none;
  margin-top:0px;
  margin:0px;
  border: 1.5px solid white;
`;
export default Card