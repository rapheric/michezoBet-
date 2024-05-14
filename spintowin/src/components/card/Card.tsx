import React,{useState} from 'react';
import styled from '@emotion/styled';
import {  faArrowRotateRight, faRotateLeft ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// interface Bet {
//         option: string;
//       }
      
interface PlacedBet {
        Option: string;
        BetAmounts: number;
}


const Card = () => {
        const [betAmount, setBetAmount] = useState<number>(10);
        const [chipAmount, setChipAmount] = useState<number>(0);
        const [placedBetAmount, setPlacedBetAmount] = useState<number>(0);
        const [selectedOption, setSelectedOption] = useState<string | null>(null);
        const [randomNumber, setRandomNumber] = useState<number | null>(null);
        const [result, setResult] = useState<'win' | 'lose' | null>(null);
        // const [selectedBets, setSelectedBets] = useState<Bet[]>([]);
        const [undoStack, setUndoStack] = useState<PlacedBet[]>([]);
        // const [redoStack, setRedoStack] = useState<Bet[][]>([]);
        const [placedBets, setPlacedBets] = useState<PlacedBet[]>([])
      
             const handleSelectOption = (option: string) => {
                setSelectedOption(option);
              };
              const handleSpin = (e:any) => {
                e.preventDefault();
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
                hasWon = randomNumber ===19;
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
            
        //       Calculate payout based on the bet amount
              const calculatePayout = (): number => {
                let odd2: Array<string | null> = ['even', 'odd', 'black', 'red'];
                let odd3: Array<string | null> = ['range12', 'range1324', 'range2536'];
                 let odd36: Array<string | null> = ['zero', '1', '2', '3','4','5','6','7','8','9','10','11','12',
                        '13', '14', '15', '16','17','18','19','20','21','22','23','24','25',
                        '26', '27', '28', '29','30','31','32','33','34','35','36']

                return   result === 'win' && odd2.includes(selectedOption) ? chipAmount * 2:
                result === 'win' && odd3.includes(selectedOption) ? chipAmount * 3:
                result === 'win' && odd36.includes(selectedOption) ? chipAmount * 36:
               0;
        }

        const setPlacedAmont = ()=>{
                let amount = 0;
                placedBets.forEach(x=> {
                        amount += x.BetAmounts;
                });

                setPlacedBetAmount(amount)
        }
       
        const handleSelected = (option:string ) =>{
                handleSelectOption(option)
                setChipAmount(placedBetAmount)
        // let selectedindex = placedBets.findIndex(x=> x.Option === option);
        // if(selectedindex != -1){
        //         placedBets[selectedindex].BetAmounts.push(betAmount);
        // }
        // else{
        placedBets.push({
                Option: option,
                BetAmounts: betAmount
        });
        //}

        setPlacedAmont();
        console.log(placedBets);
        

        // const newBet: Bet = {option};
        // setSelectedBets([...selectedBets, newBet]);
        // setUndoStack([...undoStack, [...selectedBets]]);
        // setRedoStack([]);
        // handleSelectOption(option)
        // setPlacedBetAmount(placedBetAmount+betAmount)
            };

            const deleteSelected = () =>{
                setSelectedOption(null)
                setPlacedBetAmount(0)
                setBetAmount(10)
                setRandomNumber(null)
                setPlacedBets([])
                setUndoStack([])
                setResult(null)
           };
        
        const handleDouble = () =>{
        setPlacedBetAmount(placedBetAmount*2)
            }
            
            const undo = () => {
                if(placedBets.length > 0){
                        let removed = placedBets.pop() as PlacedBet;
                        undoStack.push(removed);
                        setPlacedAmont();
                }

                console.log(placedBets);
                
              };
            
              const redo = () => {
                if (undoStack.length > 0) {
                  const nextBets = undoStack.pop() as PlacedBet;
                 placedBets.push(nextBets);
                 setPlacedAmont();
                }
                console.log(placedBets);
              };
  return (
        <>
    <CardWrapper>
    <CardContainer>
        <div>
        <ZeroItem onClick={()=>handleSelected('zero')} >
          0
         </ZeroItem>
        </div>
    <div>
        <ContainerStyles>
            <ListStyles  onClick={()=>handleSelected('3')}>
                    3
           </ListStyles>
            <ListDark onClick={()=>handleSelected('6')} >
                    6
            </ListDark>
            <ListStyles onClick={()=>handleSelected('9')} >
                    9
            </ListStyles>
            <ListStyles onClick={()=>handleSelected('12')} >
                    12
            </ListStyles>
            <ListDark onClick={()=>handleSelected('15')} >
                    15
            </ListDark>
            <ListStyles onClick={()=>handleSelected('18')}>
                    18
            </ListStyles>
            <ListStyles onClick={()=>handleSelected('21')} >
                    21
            </ListStyles>
             <ListDark onClick={()=>handleSelected('24')}>
                    24
            </ListDark>
            <ListStyles onClick={()=>handleSelected('27')}>
                    27
            </ListStyles>
            <ListStyles onClick={()=>handleSelected('30')}>
                    30
            </ListStyles>
            <ListDark onClick={()=>handleSelected('33')}>
                    33
            </ListDark>
            <ListStyles onClick={()=>handleSelected('36')} >
                    36
            </ListStyles>
            <ListDark onClick={()=>handleSelected('2')}>
                    2
            </ListDark>
            <ListStyles onClick={()=>handleSelected('5')}>
                    5
            </ListStyles>
            <ListDark onClick={()=>handleSelected('8')} >
                    8
            </ListDark>
            <ListDark onClick={()=>handleSelected('11')} >
                    11
            </ListDark>
            <ListStyles onClick={()=>handleSelected('14')} >
                    14
            </ListStyles>
            <ListDark onClick={()=>handleSelected('17')}>
                    17
            </ListDark>
            <ListDark onClick={()=>handleSelected('20')} >
                    20
            </ListDark>
             <ListStyles onClick={()=>handleSelected('23')} >
                    23
            </ListStyles>
            <ListDark onClick={()=>handleSelected('26')} >
                    26
            </ListDark>
            <ListDark onClick={()=>handleSelected('29')} >
                    29
            </ListDark>
            <ListStyles  onClick={()=>handleSelected('32')}>
                    32
            </ListStyles>
            <ListDark onClick={()=>handleSelected('35')}>
                    35
            </ListDark>
            <ListStyles onClick={()=>handleSelected('1')} >
                    1
            </ListStyles>
            <ListDark onClick={()=>handleSelected('4')} >
                    4
            </ListDark>
            <ListStyles onClick={()=>handleSelected('7')}>
                    7
            </ListStyles>
            <ListDark onClick={()=>handleSelected('10')}>
                    10
            </ListDark>
            <ListDark onClick={()=>handleSelected('13')} >
                    13
            </ListDark>
            <ListStyles onClick={()=>handleSelected('16')} >
                    16
            </ListStyles>
            <ListStyles onClick={()=>handleSelected('19')} >
                    19
            </ListStyles>
             <ListDark  onClick={()=>handleSelected('22')}>
                    22
            </ListDark>
            <ListStyles onClick={()=>handleSelected('25')}>
                    25
            </ListStyles>
            <ListDark onClick={()=>handleSelected('28')} >
                    28
            </ListDark >
            <ListDark onClick={()=>handleSelected('31')}>
                    31
            </ListDark>
            <ListStyles onClick={()=>handleSelected('34')} >
                    34
            </ListStyles>
        </ContainerStyles>
        <ContainerStyles>
            <ListItems onClick={()=>handleSelected('range12')}>
                1 ~ 12 
            </ListItems>
            <ListItems onClick={()=>handleSelected('range1324')}>
                13 ~ 24
            </ListItems>
            <ListItems  onClick={()=>handleSelected('range2536')}>
                25 ~ 36
            </ListItems>
        </ContainerStyles>
    </div>
    <ButtonContainer>
      <StyledButton onClick={undo}><FontAwesomeIcon icon={faArrowRotateRight} /></StyledButton>
      <StyledButton onClick={handleDouble}>x2</StyledButton>
      <StyledButton onClick={redo}><FontAwesomeIcon icon={faRotateLeft} /></StyledButton>
      <StyledButton onClick={deleteSelected}><FontAwesomeIcon icon={faTrashCan} /></StyledButton>
    </ButtonContainer>
    </CardContainer>
    <div>
    <ContainerStyles>
            <NumberItems   onClick={()=>handleSelected('low')}>
                LOW
            </NumberItems>
            <NumberItems   onClick={()=>handleSelected('even')}>
                EVEN
            </NumberItems>
            <NumberItems  onClick={()=>handleSelected('red')}>
                Red
            </NumberItems>
            <NumberItems onClick={()=>handleSelected('black')} >
               Black
            </NumberItems>
            <NumberItems  onClick={()=>handleSelected('odd')}>
                ODD
            </NumberItems>
            <NumberItems   onClick={()=>handleSelected('high')} >
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
max-width:900px;
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