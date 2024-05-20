import React,{useState,createContext} from 'react';
import styled from '@emotion/styled';
import {  faArrowRotateRight, faRotateLeft ,faTrashCan} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../aside/Nav';
import Stats from '../statistics/Stats';

interface PlacedBet {
        Option: string;
        BetAmounts: number;
}
interface CardProps {
        imageUrlB: string;
        imageUrlG: string;
        imageUrlR: string;
        imageUrlO: string;
        imageUrlP: string;
        imageUrlBL: string;
      }
      interface DiamondProps {
        color: string;
        width: number;
        height: number;
      }
      

export const BetContext = createContext< undefined>(undefined);

const Card: React.FC<CardProps>  = ({ imageUrlB,imageUrlG,imageUrlR,imageUrlO,imageUrlP,imageUrlBL}) => {
        const [betAmount, setBetAmount] = useState<number>(10);
        // const [chipAmount, setChipAmount] = useState<number>(0);
        const [payoutAmount, setPayOutAmount] = useState<number>(0);
        const [placedBetAmount, setPlacedBetAmount] = useState<number>(0);
        const [selectedOption, setSelectedOption] = useState<string | null>(null);
        const [randomNumber, setRandomNumber] = useState<number | null>(null);
        const [result, setResult] = useState<'win' | 'lose' | null>(null);
        // const [selectedBets, setSelectedBets] = useState<Bet[]>([]);
        const [undoStack, setUndoStack] = useState<PlacedBet[]>([]);
        // const [redoStack, setRedoStack] = useState<Bet[][]>([]);
        const [placedBets, setPlacedBets] = useState<PlacedBet[]>([])
        const [openOption, setOpenOption] = useState<boolean>(false);
        const [creditOpenOption, setCreditOpenOption] = useState<boolean>(false)
        const [spinning, setSpinning] = useState(false);
        
      
             const handleSelectOption = (option: string) => {
                setSelectedOption(option);
              };

              const getOptionOdd = (o:string) :number => {
                if(o==='even'||o==='odd'||o==='black'||o==='red'|| o=== 'low'|| o=== 'high'){
                        return 2;
                }
                else if(o==='range12'||o==='range1324'||o==='range2536'){
                        return 3;
                }
                else if(o==='1'||o==='2'||o==='3'||o==='4'||o==='5'||o==='6'||o==='7'||
                        o==='8'||o==='9'||o==='10'||o==='11'||o==='12'|| o==='13'||o==='14'||o==='15'||
                        o==='16'||o==='17'||o==='18'||o==='19'||o==='20'||o==='21'||o==='22'||o==='23'||
                        o==='24'||o==='25'||o==='26'||o==='27'||o==='28'||o==='29'||o==='30'||o==='31'
                        ||o==='32'||o==='33'||o==='34'||o==='35'||o==='36'
                ){
                        return 36;
                }
                return 1;
              } 


              const handleSpin = (e:any) => {
                setOpenOption(!openOption)
                e.preventDefault();
                setSpinning(true);
                const randomNumber = Math.floor(Math.random() * 37);
                setTimeout(() => {
                setRandomNumber(randomNumber);
                setSpinning(false);
                setOpenOption(false);
                }, 3000);

            
        // Determine if the user has won or lost based on the selected numbers, option, and generated random number
let hasWon = false;
let payoutAmount = 0;
switch (randomNumber) {
case 1:
hasWon = placedBets.findIndex(x=> x.Option === '1' || x.Option === 'odd'||
x.Option === 'low'||x.Option === 'red'||x.Option === 'range12') !== -1;
if(hasWon){
payoutAmount = placedBets.filter(x=> x.Option === '1' || x.Option === 'odd'||
        x.Option === 'low'||x.Option === 'red'||x.Option === 'range12')
        .map(c => c.BetAmounts * getOptionOdd(c.Option))
        .reduce((sum, current) => sum + current);
        setPayOutAmount(payoutAmount)

}
break;  
case 2:
hasWon = placedBets.findIndex(x=> x.Option === '2' || x.Option === 'even' ||
x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low') !== -1;
if(hasWon){
        payoutAmount = placedBets.filter(x=> x.Option === '2' ||
        x.Option === 'even'||x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low')
        .map(c => c.BetAmounts * getOptionOdd(c.Option))
        .reduce((sum, current) => sum + current);
        setPayOutAmount(payoutAmount)

}
break;  
case 3:
hasWon = placedBets.findIndex(x=> x.Option === '3' || x.Option === 'odd'||
        x.Option === 'red'||x.Option === 'range12'|| x.Option === 'low') !== -1;
if(hasWon){
        payoutAmount = placedBets.filter(x=> x.Option === '3' || x.Option === 'odd'||
                x.Option === 'red'||x.Option === 'range12'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                .reduce((sum, current) => sum + current);
                setPayOutAmount(payoutAmount)

}
break;  
case 4:
hasWon = placedBets.findIndex(x=> x.Option === '4' || x.Option === 'even' ||
x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '4' ||
        x.Option === 'even'||x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low')
        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                .reduce((sum, current) => sum + current);
                setPayOutAmount(payoutAmount)

}
break;  
case 5:
        hasWon = placedBets.findIndex(x=> x.Option === '5' || x.Option === 'odd'||
                x.Option === 'red'||x.Option === 'range12'|| x.Option === 'low') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '5' || x.Option === 'odd'||
                        x.Option === 'red'||x.Option === 'range12'|| x.Option === 'low')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
        break;  
case 6:
        hasWon = placedBets.findIndex(x=> x.Option === '6' || x.Option === 'even' ||
        x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '6' ||
                x.Option === 'even'||x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
        break;  
case 7:
        hasWon = placedBets.findIndex(x=> x.Option === '7' || x.Option === 'odd'||
                x.Option === 'red'||x.Option === 'range12'|| x.Option === 'low') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '7' || x.Option === 'odd'||
                        x.Option === 'red'||x.Option === 'range12'|| x.Option === 'low')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
        break;  
case 8:
        hasWon = placedBets.findIndex(x=> x.Option === '8' || x.Option === 'even' ||
        x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '8' ||
                x.Option === 'even'||x.Option === 'black'||x.Option === 'range12'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
         break;  
case 9:
hasWon = placedBets.findIndex(x=> x.Option === '9' || x.Option === 'odd'||
        x.Option === 'red'|| x.Option === 'range12'||x.Option === 'range12'|| x.Option === 'low') !== -1;
if(hasWon){
        payoutAmount = placedBets.filter(x=> x.Option === '9' || x.Option === 'odd'||
                x.Option === 'red'|| x.Option === 'range12'||x.Option === 'range12'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                .reduce((sum, current) => sum + current);
                setPayOutAmount(payoutAmount)

}
break;  
case 10:
        hasWon = placedBets.findIndex(x=> x.Option === '10' || x.Option === 'even' ||
        x.Option === 'black'|| x.Option === 'range12'|| x.Option === 'low') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '10' ||
                x.Option === 'even'||x.Option === 'black'|| x.Option === 'range12'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
        break;  
case 11:
        hasWon = placedBets.findIndex(x=> x.Option === '11' || x.Option === 'odd'||
                x.Option === 'black'|| x.Option === 'range12'|| x.Option === 'low') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '11' || x.Option === 'odd'||
                        x.Option === 'black'|| x.Option === 'range12'|| x.Option === 'low')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
        break;  
case 12:
        hasWon = placedBets.findIndex(x=> x.Option === '12' || x.Option === 'even' ||
        x.Option === 'red'|| x.Option === 'range12'|| x.Option === 'low') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '12' ||
                x.Option === 'even'||x.Option === 'red'|| x.Option === 'range12'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
                break;  
case 13:
        hasWon = placedBets.findIndex(x=> x.Option === '13' || x.Option === 'odd'||
        x.Option === 'range1324'||x.Option === 'black'|| x.Option === 'low') !== -1;
        if(hasWon){
        payoutAmount = placedBets.filter(x=> x.Option === '13' || x.Option === 'odd'||
               x.Option === 'range1324'||x.Option === 'black'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                .reduce((sum, current) => sum + current);
                setPayOutAmount(payoutAmount)
        
        }
        break;  
        case 14:
        hasWon = placedBets.findIndex(x=> x.Option === '14' || x.Option === 'even' ||
        x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '14' ||
        x.Option === 'even'||x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low')
        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                .reduce((sum, current) => sum + current);
                setPayOutAmount(payoutAmount)
        
        }
        break;  
        case 15:
        hasWon = placedBets.findIndex(x=> x.Option === '15' || x.Option === 'odd'||
                x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '15' || x.Option === 'odd'||
                        x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)
        
        }
        break;  
        case 16:
        hasWon = placedBets.findIndex(x=> x.Option === '16' || x.Option === 'even' ||
        x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '16' ||
                x.Option === 'even'||x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)
        
        }
        break;  
        case 17:
                hasWon = placedBets.findIndex(x=> x.Option === '17' || x.Option === 'odd'||
                        x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'low') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '17' || x.Option === 'odd'||
                                x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'low')
                                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 18:
                hasWon = placedBets.findIndex(x=> x.Option === '18' || x.Option === 'even' ||
                x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '18' ||
                x.Option === 'even'||x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'low')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 19:
                hasWon = placedBets.findIndex(x=> x.Option === '19' || x.Option === 'odd'||
                        x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'high') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '19' || x.Option === 'odd'||
                        x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'high')
                                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 20:
                hasWon = placedBets.findIndex(x=> x.Option === '20' || x.Option === 'even' ||
                x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'high') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '20' ||
                x.Option === 'even'||x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                        break;  
        case 21:
        hasWon = placedBets.findIndex(x=> x.Option === '21' || x.Option === 'odd'||
                x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'high') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '21' || x.Option === 'odd'||
                        x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
                break;  
        case 22:
                hasWon = placedBets.findIndex(x=> x.Option === '22' || x.Option === 'even' ||
                x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'high') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '22' ||
                        x.Option === 'even'||x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 23:
                hasWon = placedBets.findIndex(x=> x.Option === '23' || x.Option === 'odd'||
                        x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'high') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '23' || x.Option === 'odd'||
                                x.Option === 'red'|| x.Option === 'range1324'|| x.Option === 'high')
                                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 24:
                hasWon = placedBets.findIndex(x=> x.Option === '24' || x.Option === 'even' ||
                x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'high') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '24' ||
                                x.Option === 'even'||x.Option === 'black'|| x.Option === 'range1324'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                        break;  
        case 25:
                hasWon = placedBets.findIndex(x=> x.Option === '25' || x.Option === 'odd'||
                 x.Option === 'range2536'||x.Option === 'red'|| x.Option === 'high') !== -1;
                if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '25' || x.Option === 'odd'||
                x.Option === 'range2536'||x.Option === 'red'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)
                
                }
                break;  
        case 26:
        hasWon = placedBets.findIndex(x=> x.Option === '26' || x.Option === 'even' ||
        x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '26' ||
                x.Option === 'even'||x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high')
        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                .reduce((sum, current) => sum + current);
                setPayOutAmount(payoutAmount)
        
        }
        break;  
        case 27:
        hasWon = placedBets.findIndex(x=> x.Option === '27' || x.Option === 'odd'||
                x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '27' || x.Option === 'odd'||
                        x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)
        
        }
        break;  
        case 28:
        hasWon = placedBets.findIndex(x=> x.Option === '28' || x.Option === 'even' ||
        x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '28' ||
                        x.Option === 'even'||x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high')
                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)
        
        }
        break;  
        case 29:
                hasWon = placedBets.findIndex(x=> x.Option === '29' || x.Option === 'odd'||
                        x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '29' || x.Option === 'odd'||
                                x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high')
                                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 30:
                hasWon = placedBets.findIndex(x=> x.Option === '30' || x.Option === 'even' ||
                x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '30' ||
                                x.Option === 'even'||x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 31:
                hasWon = placedBets.findIndex(x=> x.Option === '31' || x.Option === 'odd'||
                        x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '31' || x.Option === 'odd'||
                                x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high')
                                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 32:
                hasWon = placedBets.findIndex(x=> x.Option === '32' || x.Option === 'even' ||
                x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '32' ||
                                x.Option === 'even'||x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                        break;  
        case 33:
        hasWon = placedBets.findIndex(x=> x.Option === '33' || x.Option === 'odd'||
                x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
        if(hasWon){
                payoutAmount = placedBets.filter(x=> x.Option === '33' || x.Option === 'odd'||
                        x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                        .reduce((sum, current) => sum + current);
                        setPayOutAmount(payoutAmount)

        }
                break;  
        case 34:
                hasWon = placedBets.findIndex(x=> x.Option === '34' || x.Option === 'even' ||
                x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '34' ||
                                x.Option === 'even'||x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 35:
                hasWon = placedBets.findIndex(x=> x.Option === '35' || x.Option === 'odd'||
                        x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high') !== -1;
                if(hasWon){
                        payoutAmount = placedBets.filter(x=> x.Option === '35' || x.Option === 'odd'||
                                x.Option === 'black'|| x.Option === 'range2536'|| x.Option === 'high')
                                .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                break;  
        case 36:
                hasWon = placedBets.findIndex(x=> x.Option === '36' || x.Option === 'even' ||
                x.Option === 'red'|| x.Option === 'range2536'|| x.Option === 'high'|| x.Option === 'high') !== -1;
                        if(hasWon){
                                payoutAmount = placedBets.filter(x=> x.Option === '36' ||
                                x.Option === 'even'||x.Option === 'red'|| x.Option === 'high'|| x.Option === 'range2536')
                        .map(c => c.BetAmounts * getOptionOdd(c.Option))
                                .reduce((sum, current) => sum + current);
                                setPayOutAmount(payoutAmount)
        
                }
                        break;  
                        

                
          }

            console.log('Payut amount', payoutAmount);
            
                setResult(hasWon ? 'win' : 'lose');
              };
            
        //       Calculate payout based on the bet amount
        //       const calculatePayout = (): number => {
        //         let odd2: Array<string | null> = ['even', 'odd', 'black', 'red'];
        //         let odd3: Array<string | null> = ['range12', 'range1324', 'range2536'];
        //          let odd36: Array<string | null> = ['zero', '1', '2', '3','4','5','6','7','8','9','10','11','12',
        //                 '13', '14', '15', '16','17','18','19','20','21','22','23','24','25',
        //                 '26', '27', '28', '29','30','31','32','33','34','35','36']

        //         return   result === 'win' && odd2.includes(selectedOption) ? chipAmount * 2:
        //         result === 'win' && odd3.includes(selectedOption) ? chipAmount * 3:
        //         result === 'win' && odd36.includes(selectedOption) ? chipAmount * 36:
        //        0;
        // }

        const setPlacedAmont = ()=>{
                let amount = 0;
                placedBets.forEach(x=> {
                        amount += x.BetAmounts;
                });

                setPlacedBetAmount(amount)
        }
       
        const handleSelected = (option:string ) =>{
        handleSelectOption(option)
        placedBets.push({
                Option: option,
                BetAmounts: betAmount
        });
        
        setPlacedAmont();
        console.log(placedBets);
            };

        const deleteSelected = () =>{
                setSelectedOption(null)
                setPlacedBetAmount(0)
                setBetAmount(10)
                setPlacedBets([])
                setUndoStack([])
                setResult(null)
                setOpenOption(false)
                setCreditOpenOption(false)
                setPayOutAmount(0)
           };
        
        const handleDouble = (amount:number) =>{
        setPlacedBetAmount(amount*2)
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
   < Navbar randomNumber={randomNumber} result={result} />
   <Stats selectedOption={selectedOption}/>
         <>
    <CardWrapper>
    <CardContainer>
        <div>
        <ZeroItem onClick={()=>handleSelected('zero')} >
        <Diamond color="green" width={40} height={40} />
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
      <StyledButton onClick={redo}><FontAwesomeIcon icon={faArrowRotateRight} /></StyledButton>
      <StyledButton onClick={()=>handleDouble}>x2</StyledButton>
      <StyledButton onClick={undo}><FontAwesomeIcon icon={faRotateLeft} /></StyledButton>
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
            <Diamond color="red" width={45} height={45}/>
            </NumberItems>
            <NumberItems onClick={()=>handleSelected('black')} >
            <Diamond color="black" width={45} height={45} />
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
    <StakeBalance onClick={()=>setCreditOpenOption(!creditOpenOption)}>
     <BalanceTitle >CREDIT</BalanceTitle>
     <BalanceAmount>KSh0.00</BalanceAmount>
    </StakeBalance>
    <StakeBalance>
     <BalanceTitle>TOTAL BET</BalanceTitle>
     <BalanceAmount>KSh{placedBetAmount}</BalanceAmount>
    </StakeBalance>
    <StakeBalanceG>
     <BalanceTitle>WIN</BalanceTitle>
     <BalanceAmount>KSh{payoutAmount}</BalanceAmount>
    </StakeBalanceG>
    </div>
  <RightDiv>
   <ActionDiv>
    <OuterDiv>
   <InnerDiv>
   <ChildDivP 
           onClick={() => setBetAmount(Number(500))}>
                <Image src={imageUrlP}/>
   </ChildDivP>
     <Span>KSh500</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDivB
           onClick={() => setBetAmount(Number(400))}>
             <Image src={imageUrlB}/>    
      </ChildDivB>
     <Span>KSh400</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDivO
           onClick={() => setBetAmount(Number(200))}>
                <Image src={imageUrlO}/>
      </ChildDivO>
     <Span>KSh200</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDivG
           onClick={() => setBetAmount(Number(100))}
           >
            <Image src={imageUrlG}/>   
      </ChildDivG>
     <Span>KSh100</Span>
   </InnerDiv>
   <InnerDiv>
   <ChildDivR
           onClick={() => setBetAmount(Number(50))}>
                <Image src={imageUrlR}/>
      </ChildDivR>
     <Span>KSh50</Span>
   </InnerDiv>
   <InnerDiv>
     <ChildDivBL
           onClick={() => setBetAmount(Number(10))}>
                <Image src={imageUrlBL}/>
      </ChildDivBL>
   <Span>KSh10</Span>
   </InnerDiv>
 </OuterDiv>
 </ActionDiv>
   <ButtonDiv>
     <Button onClick={handleSpin}>
    
     </Button>
   </ButtonDiv>
   </RightDiv>
 </FooterContainer>
 </div>
 </>
 {creditOpenOption &&
 <>
 <Container>
      <Title>TICKET ERROR</Title>
      <Paragraph>You do not have enough credit</Paragraph>
      <Buttonn onClick={()=>setCreditOpenOption(!creditOpenOption)}>Ok</Buttonn>
    </Container>
 </>
}
{openOption &&
        <> <SContainer>
        <Wheel>
            <SpinnerButton  disabled={spinning}>
        {spinning ? 'Spinning...' : ""}
         {randomNumber !== null && !spinning && randomNumber}
            </SpinnerButton>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">1</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">2</SpanNo>
            <SNumber  variant="primary"></SNumber>
                <SpanNo className="one">3</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">4</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">5</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">6</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">7</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">8</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">9</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">10</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">11</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">12</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">13</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">14</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">15</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">16</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">17</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">18</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">19</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">20</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">21</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">22</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">23</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">24</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">25</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">26</SpanNo>
            <SNumber  variant="primary"></SNumber>
                <SpanNo className="one">27</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">28</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">29</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">30</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                 <SpanNo className="one">31</SpanNo>
            <SNumber  variant="primary"></SNumber>
                <SpanNo className="one">32</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">33</SpanNo>
            <SNumber  variant="primary"></SNumber>
                 <SpanNo className="one">34</SpanNo>
            <SNumber  variant="secondary"></SNumber>
                <SpanNo className="one">35</SpanNo>
            <SNumber  variant="primary"></SNumber>
                <SpanNo className="one">36</SpanNo>
            <Arrow />
</Wheel>
    </SContainer></>
}
 </>
  )
}
const Image = styled.img`
 object-fit:cover;
 overflow:hidden;
 object-repeat:no-repeat;
 width:40px;
 height:40px;
`;

const SContainer = styled.div`
  background-color: white;
  width: 400px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  position:absolute;
  z-index:2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  margin: 0 0 20px;
  font-size: 20px;
  color: #333;
  font-weight:400;
`;

const Paragraph = styled.p`
  margin: 0 0 20px;
  font-size: 16px;
  color: #555;
`;

const Buttonn = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
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
position :relative;
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
position:relative;
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
   position :relative;
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
const Diamond = styled.div<DiamondProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: ${({ color }) => color};
  position: absolute;
//   top: 50%;
//   left: 50%;
  tranform-origin:0 100%;
  transform: translate(-50%, -50%); 
  transform:rotateX(45deg) rotateZ(45deg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin:2px;
`;
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
  background-color: #013b93;
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
const StakeBalanceG = styled.div`
    display: inline-block;
    width: 122px;
    height: 60px;
    padding: 3px 0 0 3px;
    font-family: Roboto;
    text-align: left;
    background-color: gray;
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
const ChildDivBL = styled.div`
 margin-bottom: 5px;
 cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-color:black;
  background-position: center;
  background-image: url("../public/assets/img.bb.png");
`
const ChildDivO = styled.div`
 margin-bottom: 5px;
 cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
  background-image: url("/spintowin/public/assets/img.o.png");
 background-color:orange;
`
const ChildDivB = styled.div`
 margin-bottom: 5px;
 cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-size: cover;
  background-position: center;
`
const ChildDivP = styled.div`
 margin-bottom: 5px;
 cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color:purple;
  background-size: cover;
  background-position: center;
  background-image: url("spintowin/public/assets/img-p.png");
`
const ChildDivR = styled.div`
 margin-bottom: 5px;
 cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color:red;
  background-size: cover;
  background-position: center;
  background-image: url("spintowin/public/assets/img.rr.png");
`

const ChildDivG = styled.div`
 margin-bottom: 5px;
 cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color:green;
  background-size: cover;
  background-position: center;
  background-image: url("spintowin/public/assets/img.g.png");
`
const ActionDiv = styled.div`
width:250px;
height:50px;
`
const Span = styled.span`
  font-family: Roboto;
    font-size: 10px;
      font-weight: 600;
      line-height: 15px;
      color: #fff;
      text-transform: none;
`;
const RightDiv = styled.div`
display:flex;
gap:30px;
`
const ButtonDiv = styled.div`
`
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height:400px;
  width:400px;
  position: relative;
`;

const Wheel = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0px;
  bottom:0px;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  box-shadow:0 0 5px gray;
            0 0 15px white;
            0 0 18px black;
  transition: transform 5s ease-in-out;
`;

const SNumber = styled.div <{ variant: 'primary' | 'secondary' }> `
.prize {
        display: block;
        transform: rotateZ(90deg);
        left: 8px;             
        text-align: center;
        font-size: 28px;
        margin-top: -160px;
        margin-left: -15px;
        color: rgb(255, 255, 255);
        text-shadow: -1px -1px 0 rgb(88, 86, 81), 1px -1px 0 rgb(88, 86, 81),
            -1px 1px 0 rgb(88, 86, 81), 1px 1px 0 rgb(88, 86, 81);
    }
}
}
}

nth-child(#{$i}) {
border-color: $color transparent;
transform: rotate(#{$slice-degrees-step * ($i - $k)});
}
}
position: absolute;
width: 50%;
height: 50%;
transform-origin: bottom right;
transform:rotate(10deg)
  ${({ variant }) =>
    variant === 'primary'
      ? `
      background-color: red;
    `
      : `
      background-color: black;
    `}
`
const SpanNo = styled.div`
position: relative;
font-size:2em;
font-weight:700;
transform:rotate(10deg)
color:white;
clip-path:polygon(0 0 56% 0, 100% 100% 0 56% );
display:flex;
align-items:center;
justify-content:center;
user-select:none;
cursor:pointer;
text-shadow:3px 5px 2px rgba(0 0 0 0.15);
`

const Arrow = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid red;
`;

const SpinnerButton = styled.button`
  margin-top: 20px;
  position:absolute;
  height:60px;
  width:60px;
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:10;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  &:disabled {
    background-color: #ccc;
  }
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
  background-color: white;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid #007bff;
`;

export default Card


