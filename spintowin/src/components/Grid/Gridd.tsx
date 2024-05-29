//  import React ,{useState}from 'react'
//  import styled from '@emotion/styled';
//  import imageUrlO from '../../assets/orange.png';
// import imageUrlP from '../../assets/purple.png';
// import imageUrlB from '../../assets/blue.png';
// import imageUrlBL from '../../assets/black.png';
// import imageUrlG from '../../assets/green.png';
// import imageUrlR from '../../assets/red.png';
// import imageUrlFire from '../../assets/download.svg';
// import imageUrlWin from '../../assets/spin2win-dolly (3).svg';
// import imageUrlCold from '../../assets/download (1).svg'
// import imageUrlLion from '../../assets/lionss.svg'
// import Card from '../card/Card';
// import SpinnerWheel from '../SpinnerWheel/SpinnerWheel';

//  interface GridProps{
//    placedBets: PlacedBet[];
//    placedBetAmount:number;
//  }
//  interface ImageProps {
//     showBorder?: true |false;
// } 
// interface PlacedBet {
//     Option: string;
//     BetAmounts: number;
// }
//  const Gridd: React.FC<GridProps> = ({placedBets,placedBetAmount}) => {
//      const [selectedOption, setSelectedOption] = useState<string | null>(null);
//     // const [creditOpenOption, setCreditOpenOption] = useState<boolean>(false);
//     const [betAmount, setBetAmount] = useState<number>(10);
//     // const [betAmount, setBetAmount] = useState<number>(10);
//     // const [chipAmount, setChipAmount] = useState<number>(0);
//     const [payoutAmount, setPayOutAmount] = useState<number>(0);
//     // const [mouseOverOption, setMouseOverOption] = useState<string>('');
//     // const [placedBetAmount, setPlacedBetAmount] = useState<number>(0);
//     // const [selectedOption, setSelectedOption] = useState<string | null>(null);
//     const [randomNumber, setRandomNumber] = useState<number | null>(null);
//     const [result, setResult] = useState<'win' | 'lose' | null>(null);
//     // const [selectedBets, setSelectedBets] = useState<Bet[]>([]);
//     const [undoStack, setUndoStack] = useState<PlacedBet[]>([]);
//     // const [redoStack, setRedoStack] = useState<Bet[][]>([]);
//     // const [placedBets, setPlacedBets] = useState<PlacedBet[]>([])
//     const [previousPlacedBets, setPreviousPlacedBets] = useState<PlacedBet[]>([])
//     const [openOption, setOpenOption] = useState<boolean>(false);
//     const [creditOpenOption, setCreditOpenOption] = useState<boolean>(false);
//     const [spinning, setSpinning] = useState(false);
//     const [generatedRandomNumbers, setGeneratedRandomNumbers] = useState<number[]>([]);

//     const handleSelectOption = (option: string) => {
//         setSelectedOption(option);
//     };

//     const getOptionOdd = (o: string): number => {
//         if (o === 'even' || o === 'odd' || o === 'black' || o === 'red' || o === 'low' || o === 'high') {
//             return 2;
//         }
//         else if (o === 'range12' || o === 'range1324' || o === 'range2536') {
//             return 3;
//         }
//         else if (o === '1' || o === '2' || o === '3' || o === '4' || o === '5' || o === '6' || o === '7' ||
//             o === '8' || o === '9' || o === '10' || o === '11' || o === '12' || o === '13' || o === '14' || o === '15' ||
//             o === '16' || o === '17' || o === '18' || o === '19' || o === '20' || o === '21' || o === '22' || o === '23' ||
//             o === '24' || o === '25' || o === '26' || o === '27' || o === '28' || o === '29' || o === '30' || o === '31'
//             || o === '32' || o === '33' || o === '34' || o === '35' || o === '36'
//         ) {
//             return 36;
//         }
//         return 1;
//     }

//     const handleSpin = () => {
//         setOpenOption(!openOption)
//         setSpinning(true);
//         const randomNumber = Math.floor(Math.random() * 37);
//         setTimeout(() => {
//             setRandomNumber(randomNumber);
//             setGeneratedRandomNumbers([...generatedRandomNumbers, randomNumber])
//             setPreviousPlacedBets([...placedBets])
//             setSpinning(false);
//             setOpenOption(false);
//         }, 10000);
//      // Determine if the user has won or lost based on the selected numbers, option, and generated random number
//      let hasWon = false;
//      let payoutAmount = 0;
//      switch (randomNumber) {
//          case 1:
//              hasWon = placedBets.findIndex(x => x.Option === '1' || x.Option === 'odd' ||
//                  x.Option === 'low' || x.Option === 'red' || x.Option === 'range12') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '1' || x.Option === 'odd' ||
//                      x.Option === 'low' || x.Option === 'red' || x.Option === 'range12')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 2:
//              hasWon = placedBets.findIndex(x => x.Option === '2' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '2' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 3:
//              hasWon = placedBets.findIndex(x => x.Option === '3' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '3' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 4:
//              hasWon = placedBets.findIndex(x => x.Option === '4' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '4' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 5:
//              hasWon = placedBets.findIndex(x => x.Option === '5' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '5' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 6:
//              hasWon = placedBets.findIndex(x => x.Option === '6' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '6' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 7:
//              hasWon = placedBets.findIndex(x => x.Option === '7' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '7' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 8:
//              hasWon = placedBets.findIndex(x => x.Option === '8' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '8' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 9:
//              hasWon = placedBets.findIndex(x => x.Option === '9' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range12' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '9' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range12' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 10:
//              hasWon = placedBets.findIndex(x => x.Option === '10' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '10' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 11:
//              hasWon = placedBets.findIndex(x => x.Option === '11' || x.Option === 'odd' ||
//                  x.Option === 'black' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '11' || x.Option === 'odd' ||
//                      x.Option === 'black' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 12:
//              hasWon = placedBets.findIndex(x => x.Option === '12' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range12' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '12' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'range12' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 13:
//              hasWon = placedBets.findIndex(x => x.Option === '13' || x.Option === 'odd' ||
//                  x.Option === 'range1324' || x.Option === 'black' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '13' || x.Option === 'odd' ||
//                      x.Option === 'range1324' || x.Option === 'black' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 14:
//              hasWon = placedBets.findIndex(x => x.Option === '14' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '14' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 15:
//              hasWon = placedBets.findIndex(x => x.Option === '15' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '15' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 16:
//              hasWon = placedBets.findIndex(x => x.Option === '16' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '16' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 17:
//              hasWon = placedBets.findIndex(x => x.Option === '17' || x.Option === 'odd' ||
//                  x.Option === 'black' || x.Option === 'range1324' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '17' || x.Option === 'odd' ||
//                      x.Option === 'black' || x.Option === 'range1324' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 18:
//              hasWon = placedBets.findIndex(x => x.Option === '18' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '18' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'range1324' || x.Option === 'low')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 19:
//              hasWon = placedBets.findIndex(x => x.Option === '19' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range1324' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '19' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range1324' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 20:
//              hasWon = placedBets.findIndex(x => x.Option === '20' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range1324' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '20' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range1324' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 21:
//              hasWon = placedBets.findIndex(x => x.Option === '21' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range1324' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '21' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range1324' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 22:
//              hasWon = placedBets.findIndex(x => x.Option === '22' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range1324' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '22' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range1324' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 23:
//              hasWon = placedBets.findIndex(x => x.Option === '23' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range1324' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '23' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range1324' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 24:
//              hasWon = placedBets.findIndex(x => x.Option === '24' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range1324' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '24' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range1324' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 25:
//              hasWon = placedBets.findIndex(x => x.Option === '25' || x.Option === 'odd' ||
//                  x.Option === 'range2536' || x.Option === 'red' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '25' || x.Option === 'odd' ||
//                      x.Option === 'range2536' || x.Option === 'red' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 26:
//              hasWon = placedBets.findIndex(x => x.Option === '26' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '26' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 27:
//              hasWon = placedBets.findIndex(x => x.Option === '27' || x.Option === 'odd' ||
//                  x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '27' || x.Option === 'odd' ||
//                      x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 28:
//              hasWon = placedBets.findIndex(x => x.Option === '28' || x.Option === 'even' ||
//                  x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '28' ||
//                      x.Option === 'even' || x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 29:
//              hasWon = placedBets.findIndex(x => x.Option === '29' || x.Option === 'odd' ||
//                  x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '29' || x.Option === 'odd' ||
//                      x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 30:
//              hasWon = placedBets.findIndex(x => x.Option === '30' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '30' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 31:
//              hasWon = placedBets.findIndex(x => x.Option === '31' || x.Option === 'odd' ||
//                  x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '31' || x.Option === 'odd' ||
//                      x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 32:
//              hasWon = placedBets.findIndex(x => x.Option === '32' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '32' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 33:
//              hasWon = placedBets.findIndex(x => x.Option === '33' || x.Option === 'odd' ||
//                  x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '33' || x.Option === 'odd' ||
//                      x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 34:
//              hasWon = placedBets.findIndex(x => x.Option === '34' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '34' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 35:
//              hasWon = placedBets.findIndex(x => x.Option === '35' || x.Option === 'odd' ||
//                  x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '35' || x.Option === 'odd' ||
//                      x.Option === 'black' || x.Option === 'range2536' || x.Option === 'high')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;
//          case 36:
//              hasWon = placedBets.findIndex(x => x.Option === '36' || x.Option === 'even' ||
//                  x.Option === 'red' || x.Option === 'range2536' || x.Option === 'high' || x.Option === 'high') !== -1;
//              if (hasWon) {
//                  payoutAmount = placedBets.filter(x => x.Option === '36' ||
//                      x.Option === 'even' || x.Option === 'red' || x.Option === 'high' || x.Option === 'range2536')
//                      .map(c => c.BetAmounts * getOptionOdd(c.Option))
//                      .reduce((sum, current) => sum + current);
//                  setPayOutAmount(payoutAmount)

//              }
//              break;



//      }

//      console.log('Payut amount', payoutAmount);

//      setResult(hasWon ? 'win' : 'lose');
//  };


//     const getShowBorder = (n:number) =>{
//         return betAmount === n;
//     }
//     return (
//      <div>

//         <Card imageUrlO={imageUrlO}
//                imageUrlB={imageUrlB}
//                imageUrlBL={imageUrlBL}
//                imageUrlCold={imageUrlCold} 
//                imageUrlFire={imageUrlFire}
//                imageUrlG={imageUrlG}
//                imageUrlLion={imageUrlLion}
//                imageUrlP={imageUrlP}
//                imageUrlR={imageUrlR}
//                imageUrlWin={imageUrlWin}
//                randomNumber={randomNumber}
//                generatedRandomNumbers={generatedRandomNumbers}
//                betAmount={betAmount}/>

//       {openOption && <SpinnerWheel />}
//          <FooterContainer>
//                         <Stake>
//                             <StakeBalance onClick={() => setCreditOpenOption(!creditOpenOption)}>
//                                 <BalanceTitle >CREDIT</BalanceTitle>
//                                 <BalanceAmount>KSh0.00</BalanceAmount>
//                             </StakeBalance>
//                             <StakeBalance>
//                                 <BalanceTitle>TOTAL BET</BalanceTitle>
//                                 <BalanceAmount>KSh{placedBetAmount}</BalanceAmount>
//                             </StakeBalance>
//                             <StakeBalanceG>
//                                 <BalanceTitle>WIN</BalanceTitle>
//                                 <BalanceAmount>KSh{payoutAmount}</BalanceAmount>
//                             </StakeBalanceG>
//                         </Stake>
//                       <div>
//                         <RightDiv>
//                             <ActionDiv>
//                                 <OuterDiv>
//                                     <InnerDiv>
//                                             <Image src={imageUrlP}  showBorder={getShowBorder(500)} onClick={() => setBetAmount(Number(500))}/>
//                                         <Span>KSh500</Span>
//                                     </InnerDiv>
//                                     <InnerDiv>
//                                             <Image src={imageUrlB} showBorder={getShowBorder(400)} onClick={() => setBetAmount(Number(400))}/>
//                                         <Span>KSh400</Span>
//                                     </InnerDiv>
//                                     <InnerDiv>
//                                             <Image src={imageUrlO} showBorder={getShowBorder(200)} onClick={() => setBetAmount(Number(200))} />
//                                         <Span>KSh200</Span>
//                                     </InnerDiv>
//                                     <InnerDiv>
//                                             <Image src={imageUrlG} showBorder={getShowBorder(100)} onClick={() => setBetAmount(Number(100))} />
//                                         <Span>KSh100</Span>
//                                     </InnerDiv>
//                                     <InnerDiv>
//                                             <Image src={imageUrlR} showBorder={getShowBorder(50)} onClick={() => setBetAmount(Number(50))} />
//                                         <Span>KSh50</Span>
//                                     </InnerDiv>
//                                     <InnerDiv>
//                                             <Image src={imageUrlBL} showBorder={getShowBorder(10)}  onClick={() => setBetAmount(Number(10))} />
//                                         <Span>KSh10</Span>
//                                     </InnerDiv>
//                                 </OuterDiv>
//                             </ActionDiv>
//                             <ButtonDiv>
//                                 <Button onClick={handleSpin} disabled={spinning}>

//                                 </Button>
//                             </ButtonDiv>
//                         </RightDiv>
//                         </div>
//                     </FooterContainer>
//                   </div>
//    )
//  }
 
//  const FooterContainer = styled.footer`
//  width:960px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   // min-height: 70px;
//   padding: 10px;
//   color: #fff;
//   // background-color: #013b93;
//   margin-top:20px;
//   height: 80px;
//   background-color: #192348;
// `;
// const Stake = styled.div`
// display:flex;
// min-width: 392px;
//  padding-left: 10px;
//  height:60px;
// `
// const BalanceAmount = styled.div`
// font-size: 18px;
// font-weight: 600;
// line-height: 27px;
// color: #2d2d2d;
// text-transform: none;
// `;

// const BalanceTitle = styled.div`
//     padding-bottom: 5px;
//     font-size: 11px;
//     line-height: 13px;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//     overflow: hidden;
//     color: #4a4a4a;
// `;


// const Button = styled.button`
//   cursor: pointer;
//   width: 180px;
//   height: 60px;
//   color: black;
//   border-radius: 3px;
//   -webkit-box-shadow: 0 6px 6px 0 rgba(0, 0, 0, .5);
//   font-family: Roboto;
//   font-size: 16px;
//   text-transform: initial;
//   background-color:	#FFE5B4;
// `;
// const StakeBalance = styled.div`
//     display: inline-block;
//     width: 122px;
//     height: 60px;
//     padding: 3px 0 0 3px;
//     font-family: Roboto;
//     text-align: left;
//     background: #efefef;
//     border: 2px solid #d9d9d9;
//     border-radius: 3px;
//     margin-right: 3px;
// `
// const StakeBalanceG = styled.div`
//     display: inline-block;
//     width: 122px;
//     height: 60px;
//     padding: 3px 0 0 3px;
//     font-family: Roboto;
//     text-align: left;
//     background-color: gray;
//     border: 2px solid #d9d9d9;
//     border-radius: 3px;
//     margin-right: 3px;
// `
// const OuterDiv = styled.div`
//   width: 320px;
//   height:58px;
//   display: flex;
//   justify-content: space-between;
//   items: center;
// `;

// const InnerDiv = styled.div`
// flex-basis: 16.66666667%;
// max-width: 16.66666667%;
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   width:53px:
//   height:58px;
// `;
// const ActionDiv = styled.div`
// width:320px;
// height:58px;

// `
// const Span = styled.span`
// font-family: Roboto;
//     font-size: 11px;
//     font-weight: 700;
//     line-height: 15px;
//     color: #fff;
//     text-transform: none;
//   // font-family: Roboto;
//   //   font-size: 10px;
//   //     font-weight: 600;
//   //     line-height: 15px;
//   //     color: #fff;
//   //     text-transform: none;
// `;
// const RightDiv = styled.div`
// display:flex;
// gap:30px;
// `
// const ButtonDiv = styled.div`
// -webkit-box-pack: end;
//     -ms-flex-pack: end;
//     justify-content: flex-end;
//     -webkit-box-align: end;
//     -ms-flex-align: end;
//     align-items: flex-end;
//     margin-left: auto;
//     padding-right: 10px;
//     width:190px;
// `
// const Container = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction:column;
//   height:200px;
//   width:350px;
//   position: absolute;
//   top:10%;
//   left:40%;
//   background-color:white;
// `;
// const Title = styled.h1`
//   margin: 0 0 20px;
//   font-size: 20px;
//   color: #333;
//   font-weight:400;
// `;

// const Paragraph = styled.p`
//   margin: 0 0 20px;
//   font-size: 16px;
//   color: #555;
// `;

// const Buttonn = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   font-size: 16px;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

 
//  export default Gridd;