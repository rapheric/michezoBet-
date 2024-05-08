import React,{useState} from 'react';
import styled from '@emotion/styled';
import {  faArrowRotateRight, faRotateLeft ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = () => {
        const [betAmount, setBetAmount] = useState<number>(0);
        const [placedBetAmount, setPlacedBetAmount] = useState<number>(0);
        const [selectedOption, setSelectedOption] = useState<string | null>(null);
        const [randomNumber, setRandomNumber] = useState<number | null>(null);
        const [result, setResult] = useState<'win' | 'lose' | null>(null);


        // const handleSelectNumber = (number: number) => {
        //         if (selectedNumbers.includes(number)) {
        //           setSelectedNumbers(selectedNumbers.filter(n => n !== number));
        //         } else {
        //           setSelectedNumbers([...selectedNumbers, number]);
        //         }
        //       };
            
              // Function to handle option selection (even, odd, low, high)
            //  
            // const handleSelectOption = (selectedOption: string) => {
            //     console.log('Selected option:', selectedOption);
            
            //     // You can perform any actions based on the selected option here
            //   };
             // Function to handle option selection (even, odd, low, high)
             const handleSelectOption = (option: string) => {
                setSelectedOption(option);
              };
            
            
              // Function to handle spin button click
              const handleSpin = () => {
                // Generate a random number between 0 and 36
                const randomNumber = Math.floor(Math.random() * 37);
                setRandomNumber(randomNumber);
            
                // Determine if the user has won or lost based on the selected numbers, option, and generated random number
        let hasWon = false;
        switch (selectedOption) {
        case '2':
                hasWon = randomNumber ===2;
                break;      
        case '3':
                hasWon = randomNumber ===3;
                break;
        case '4':
                hasWon = randomNumber ===4;
                break;
        case '5':
                hasWon = randomNumber ===5;
                break;
        case '6':
                hasWon = randomNumber ===6;
                break;
        case '7':
                hasWon = randomNumber ===7;
                break;
        case '8':
                hasWon = randomNumber ===8;
                break;
        case '9':
                hasWon = randomNumber ===9;
                break;
        case '10':
                hasWon = randomNumber ===10;
                break;
        case '11':
                hasWon = randomNumber ===11;
                break;
        case '12':
                hasWon = randomNumber ===12;
                break;
        case '13':
                hasWon = randomNumber ===13;
                break;
        case '14':
                hasWon = randomNumber ===14;
                break;
        case '15':
                hasWon = randomNumber ===15;
                break;
        case '16':
                hasWon = randomNumber ===16;
                break;
        case '17':
                hasWon = randomNumber ===17;
                break;
        case '18':
                hasWon = randomNumber ===18;
                break;
        case '19':
                hasWon = randomNumber ===190;
                break;
        case '20':
                hasWon = randomNumber ===20;
                break;
        case '21':
                hasWon = randomNumber ===21;
                break;
        case '22':
                hasWon = randomNumber ===22;
                break;
        case '23':
                hasWon = randomNumber ===23;
                break;
        case '24':
                hasWon = randomNumber ===24;
                break;
        case '25':
                hasWon = randomNumber ===25;
                break;
        case '26':
                hasWon = randomNumber ===26;
                break;
        case '27':
                hasWon = randomNumber ===27;
                break;
        case '28':
                hasWon = randomNumber ===28;
                break;
        case '29':
                hasWon = randomNumber ===29;
                break;
        case '30':
                hasWon = randomNumber ===30;
                break;
        case '31':
                hasWon = randomNumber ===31;
                break;
        case '32':
                hasWon = randomNumber ===32;
                break;
        case '33':
                hasWon = randomNumber ===33;
                break;
        case '34':
                hasWon = randomNumber ===34;
                break;
        case '35':
                hasWon = randomNumber ===33;
                break;
        case '36':
                hasWon = randomNumber ===34;
                break;
        case 'even':
                hasWon = randomNumber % 2 === 0;
                break;
        case 'odd':
                hasWon = randomNumber % 2 !== 0;
                break;
        case 'low':
                hasWon = randomNumber ===1;
                break;
        case 'high':
                hasWon = randomNumber ===36;
                break;
        case 'zero':
                hasWon = randomNumber ===0;
                break;
        case 'range12':
                hasWon = randomNumber >= 1 && randomNumber <= 12;;
                break;
        case 'range1324':
                hasWon = randomNumber >= 13 && randomNumber <= 24;;
                break;
        case 'range2536':
                hasWon = randomNumber >= 25 && randomNumber <= 36;;
                break;
                }
                setResult(hasWon ? 'win' : 'lose');
              };
            
              // Calculate payout based on the bet amount
              const calculatePayout = (): number => {
                return result === 'win' ? betAmount * 36 : 0;
              };
            
    const handleSelectedFisrt = () =>{
        handleSelectOption('range12')
        setPlacedBetAmount(placedBetAmount+betAmount)
    }
    const handleSelectedSecond = () =>{
        handleSelectOption('range1324')
        setPlacedBetAmount(placedBetAmount+betAmount)
    }
    const handleSelectedThird = () =>{
        handleSelectOption('range2536')
        setPlacedBetAmount(placedBetAmount+betAmount)
    }
    const handleSelectedLow = () =>{
        handleSelectOption('low')
        setPlacedBetAmount(placedBetAmount+betAmount)
    }
    const handleSelectedEven = () =>{
        handleSelectOption('even')
        setPlacedBetAmount(placedBetAmount+betAmount)
    }
    const handleSelectedOdd = () =>{
        handleSelectOption('odd')
        setPlacedBetAmount(placedBetAmount+betAmount)
    }
    const handleSelectedHigh = () =>{
        handleSelectOption('high')
        setPlacedBetAmount(placedBetAmount+betAmount)
    }
  return (
        <>
    <CardWrapper>
    <CardContainer>
        <div>
        <ZeroItem >
          0
         </ZeroItem>
        </div>
    <div>
        <ContainerStyles>
            <ListStyles  onClick={() => handleSelectOption('3')}>
                    3
           </ListStyles>
            <ListDark onClick={() => handleSelectOption('6')} >
                    6
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('9')} >
                    9
            </ListStyles>
            <ListStyles onClick={() => handleSelectOption('12')} >
                    12
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('15')} >
                    15
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('18')}>
                    18
            </ListStyles>
            <ListStyles onClick={() => handleSelectOption('21')} >
                    21
            </ListStyles>
             <ListDark onClick={() => handleSelectOption('24')}>
                    24
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('27')}>
                    27
            </ListStyles>
            <ListStyles onClick={() => handleSelectOption('2')}>
                    30
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('33')}>
                    33
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('36')} >
                    36
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('2')}>
                    2
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('5')}>
                    5
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('8')} >
                    8
            </ListDark>
            <ListDark onClick={() => handleSelectOption('11')} >
                    11
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('14')} >
                    14
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('17')}>
                    17
            </ListDark>
            <ListDark onClick={() => handleSelectOption('20')} >
                    20
            </ListDark>
             <ListStyles onClick={() => handleSelectOption('23')} >
                    23
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('26')} >
                    26
            </ListDark>
            <ListDark onClick={() => handleSelectOption('29')} >
                    29
            </ListDark>
            <ListStyles  onClick={() => handleSelectOption('32')}>
                    32
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('35')}>
                    35
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('1')} >
                    1
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('4')} >
                    4
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('7')}>
                    7
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('10')}>
                    10
            </ListDark>
            <ListDark onClick={() => handleSelectOption('13')} >
                    13
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('16')} >
                    16
            </ListStyles>
            <ListStyles onClick={() => handleSelectOption('19')} >
                    19
            </ListStyles>
             <ListDark  onClick={() => handleSelectOption('22')}>
                    22
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('25')}>
                    25
            </ListStyles>
            <ListDark onClick={() => handleSelectOption('28')} >
                    28
            </ListDark>
            <ListDark onClick={() => handleSelectOption('31')}>
                    31
            </ListDark>
            <ListStyles onClick={() => handleSelectOption('34')} >
                    34
            </ListStyles>
        </ContainerStyles>
        <ContainerStyles>
            <ListItems onClick={handleSelectedFisrt}>
                1 ~ 12 
            </ListItems>
            <ListItems onClick={handleSelectedSecond}>
                13 ~ 24
            </ListItems>
            <ListItems  onClick={handleSelectedThird}>
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
            <NumberItems   onClick={handleSelectedLow}>
                LOW
            </NumberItems>
            <NumberItems   onClick={handleSelectedEven}>
                EVEN
            </NumberItems>
            <NumberItems >
                
            </NumberItems>
            <NumberItems >
            
            </NumberItems>
            <NumberItems  onClick={handleSelectedOdd}>
                ODD
            </NumberItems>
            <NumberItems   onClick={handleSelectedHigh} >
                HIGH
            </NumberItems>
        </ContainerStyles>
    </div>
    </CardWrapper>
    <div/>
    <div>
     <FooterContainer>
     <div>
    <StakeBalance>
     <BalanceTitle>CREDIT</BalanceTitle>
     <BalanceAmount>KSh0</BalanceAmount>
    </StakeBalance>
    <StakeBalance>
     <BalanceTitle>TOTAL BET</BalanceTitle>
     <BalanceAmount>KSh{placedBetAmount}</BalanceAmount>
    </StakeBalance>
    <StakeBalance>
     <BalanceTitle>WIN</BalanceTitle>
     <BalanceAmount>KSh{calculatePayout()}</BalanceAmount>
    </StakeBalance>
    </div>
  <RightDiv>
   <ActionDiv>
    <OuterDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(500))}>
      </ChildDiv>
     <Span>KSh500</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(400))}>
      </ChildDiv>
     <Span>KSh400</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(200))}>
      </ChildDiv>
     <Span>KSh200</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(100))}
           >
      </ChildDiv>
     <Span>KSh100</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDiv 
           onClick={() => setBetAmount(Number(50))}>
      </ChildDiv>
     <Span>KSh50</Span>
   </InnerDiv>
   <InnerDiv>
     <ChildDiv 
           onClick={() => setBetAmount(Number(10))}>
      </ChildDiv>
   <Span>KSh10</Span>
   </InnerDiv>
 </OuterDiv>
 </ActionDiv>
   <ButtonDiv>
     <Button onClick={handleSpin}>
        {randomNumber !== null && (
        <p>
          {result === 'win' ? 'Congratulations! You win!' : 'Sorry, you lose!'}{randomNumber}
        </p>
      )}
     </Button>
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
  padding: 12px 12px;
  font-weight:bold;
  margin: 5px;
  border: none;
  border-radius: 50%;
  font-size: 13px;
  cursor: pointer;
  background-color:#AD5765 ;
  color:white;
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
  color: black;
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