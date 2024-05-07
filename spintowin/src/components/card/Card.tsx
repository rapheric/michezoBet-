import React,{useState} from 'react';
import styled from '@emotion/styled';
import {  faArrowRotateRight, faRotateLeft ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = () => {
        const [result, setResult] = useState<number | null>(null);
        const [selectedOption, setselectedOption] = useState<boolean>(false);
        const [betAmount, setBetAmount] = useState<number>(0);
        const [outcome, setOutcome] = useState<'win' | 'lose' | null>(null);

        // Function to handle the spin button click
        const handleSpin = () => {
        // Generate a random number between 0 and 36
        const randomNumber = Math.floor(Math.random() * 37);
    
        // Determine the outcome based on the random number and the selected bet amount
        if (randomNumber === result) {
          setOutcome('win');
        } else{
          setOutcome('lose');
        }
        setResult(randomNumber);
      };
      const handleClick = () => {
        setselectedOption(!selectedOption);
        alert("selected")
      };

    
  return (
        <>
    <CardWrapper>
    <CardContainer>
        <div>
        <ZeroItem onClick={handleClick}>
          0{selectedOption}
         </ZeroItem>
        </div>
    <div>
        <ContainerStyles>
            <ListStyles onClick={handleClick} >
                    3{selectedOption}
           </ListStyles>
            <ListDark onClick={handleClick}>
                    6{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    9{selectedOption}
            </ListStyles>
            <ListStyles onClick={handleClick}>
                    12{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    15{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    18{selectedOption}
            </ListStyles>
            <ListStyles onClick={handleClick}>
                    21{selectedOption}
            </ListStyles>
             <ListDark onClick={handleClick}>
                    24{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    27{selectedOption}
            </ListStyles>
            <ListStyles onClick={handleClick}>
                    30{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    33{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    36{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    2{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    5{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    8{selectedOption}
            </ListDark>
            <ListDark onClick={handleClick}>
                    11{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    14{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    17{selectedOption}
            </ListDark>
            <ListDark onClick={handleClick}>
                    20{selectedOption}
            </ListDark>
             <ListStyles onClick={handleClick}>
                    23{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    26{selectedOption}
            </ListDark>
            <ListDark onClick={handleClick}>
                    29{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    32{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    35{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    1{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    4{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    7{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    10{selectedOption}
            </ListDark>
            <ListDark onClick={handleClick}>
                    13{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    16{selectedOption}
            </ListStyles>
            <ListStyles onClick={handleClick}>
                    19{selectedOption}
            </ListStyles>
             <ListDark onClick={handleClick}>
                    22{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    25{selectedOption}
            </ListStyles>
            <ListDark onClick={handleClick}>
                    28{selectedOption}
            </ListDark>
            <ListDark onClick={handleClick}>
                    31{selectedOption}
            </ListDark>
            <ListStyles onClick={handleClick}>
                    34{selectedOption}
            </ListStyles>
        </ContainerStyles>
        <ContainerStyles>
            <ListItems onClick={handleClick}>
                1 ~ 12 {selectedOption}
            </ListItems>
            <ListItems onClick={handleClick}>
                13 ~ 24{selectedOption}
            </ListItems>
            <ListItems onClick={handleClick}>
                25 ~ 36{selectedOption}
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
            <NumberItems onClick={handleClick}>
                LOW{selectedOption}
            </NumberItems>
            <NumberItems onClick={handleClick}>
                EVEN{selectedOption}
            </NumberItems>
            <NumberItems onClick={handleClick}>
                
            </NumberItems>
            <NumberItems onClick={handleClick}>
            {selectedOption}
            </NumberItems>
            <NumberItems onClick={handleClick}>
                ODD{selectedOption}
            </NumberItems>
            <NumberItems onClick={handleClick}>
                HIGH{selectedOption}
            </NumberItems>
        </ContainerStyles>
    </div>
    </CardWrapper>
    <div/>
    <div>
     <FooterContainer>
     <div>
    <StakeBalance>
     <BalanceTitle>TOTAL BET</BalanceTitle>
     <BalanceAmount>KSh{betAmount}</BalanceAmount>
    </StakeBalance>
    </div>
  <RightDiv>
   <ActionDiv>
    <OuterDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(betAmount === 0?"500":betAmount+500))}>
      </ChildDiv>
     <Span>KSh500</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(betAmount === 0?"400":betAmount+400))}>
      </ChildDiv>
     <Span>KSh400</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(betAmount === 0?"200":betAmount+200))}>
      </ChildDiv>
     <Span>KSh200</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(betAmount === 0?"100":betAmount+100))}>
      </ChildDiv>
     <Span>KSh100</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(betAmount === 0?"50":betAmount+50))}>
      </ChildDiv>
     <Span>KSh50</Span>
   </InnerDiv>
   <InnerDiv>
     <ChildDiv 
           onClick={() => setBetAmount(Number(betAmount === 0?"10":betAmount+10))}>
      </ChildDiv>
   <Span>KSh10</Span>
   </InnerDiv>
 </OuterDiv>
 </ActionDiv>
   <ButtonDiv>
     <Button onClick={handleSpin}>Place your bet{outcome}</Button>
   </ButtonDiv>
   </RightDiv>
 </FooterContainer>
 </div>
 
 </>
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
  font-size: 11px;
  cursor: pointer;
  background-color:#AD5765 ;
  color:#D6A0A9;
  &:hover {
    background-color: #F4E5E8;
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: 10px;
  color: #fff;
  background-color:blue;
  margin-top:40px;
`;

const BalanceAmount = styled.div`
font-size: 18px;
font-weight: 600;
line-height: 27px;
color: #2d2d2d;
text-transform: none;
`;

const BalanceTitle = styled.div`
    padding-bottom: 5px;
    font-size: 11px;
    line-height: 13px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #4a4a4a;
`;


const Button = styled.button`
  cursor: pointer;
  width: 180px;
  height: 60px;
  color: #fff;
  border-radius: 3px;
  -webkit-box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .5);
  font-family: Roboto;
  font-size: 16px;
  text-transform: initial;
  background-color:	#FFE5B4;

`;
const StakeBalance = styled.div`
    display: inline-block;
    width: 122px;
    height: 60px;
    padding: 3px 0 0 3px;
    font-family: Roboto;
    text-align: left;
    background: #efefef;
    border: 2px solid #d9d9d9;
    border-radius: 3px;
    margin-right: 3px;
}
`
// const OuterDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
// `;

// const InnerDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;


// const Span = styled.span`
//     font-family: Roboto;
//     font-size: 11px;
//     font-weight: 700;
//     line-height: 15px;
//     color: #fff;
//     text-transform: none;
// `;


const OuterDiv = styled.div`
  width: 270px;
  height:80px;
  display: flex;
  justify-content: space-between;
  items: center;
`;

const InnerDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 2px;
  display: flex;
  flex-direction: column;
`;

const Span = styled.span`
  font-family: Roboto;
    font-size: 10px;
      font-weight: 600;
      line-height: 15px;
      color: #fff;
      text-transform: none;
`;
const ChildDiv = styled.div`
 margin-bottom: 5px;
 cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #007bff;
`
const ActionDiv = styled.div`
width:250px;
height:50px;
`
const RightDiv = styled.div`
display:flex;
gap:30px;
`
const ButtonDiv = styled.div`

`


export default Card