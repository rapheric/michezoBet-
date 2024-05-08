import React, { useState } from 'react';
import styled from '@emotion/styled';

// Styled components for Emotion.js
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:maroon;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
// Styled components for Emotion.js
const OptionButton = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Main component
const Appp: React.FC = () => {
  const [betAmount, setBetAmount] = useState<number>(0);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('even');
  const [randomNumber, setRandomNumber] = useState<number | null>(null);
  const [result, setResult] = useState<'win' | 'lose' | null>(null);

  // Function to handle bet amount change
//   const handleBetAmountChange = (amount: number) => {
//     setBetAmount(amount);
//   };

  // Function to handle number selection
  const handleSelectNumber = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

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

  return (
    <Container>
      <h1>Virtual Bet App</h1>
      <div>
        <p>Set bet amount:</p>
        <div 
          onClick={() => setBetAmount(Number(betAmount === 0?"500":betAmount+500))}>
            {betAmount}
        </div>
      </div>
      <div>
        <p>Select one or more numbers:</p>
        {Array.from({ length: 37 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleSelectNumber(index)}
            style={{ backgroundColor: selectedNumbers.includes(index) ? 'yellow' : 'transparent' }}
          >
            {index}
          </button>
        ))}
      </div>
      <div>
      <div>
      <h1>Virtual Bet App</h1>
      <div>
        <p>Select option:</p>
        <OptionButton onClick={() => handleSelectOption('zero')}>0</OptionButton>
        <OptionButton onClick={() => handleSelectOption('even')}>Even</OptionButton>
        <OptionButton onClick={() => handleSelectOption('odd')}>Odd</OptionButton>
        <OptionButton onClick={() => handleSelectOption('low')}>Low </OptionButton>
        <OptionButton onClick={() => handleSelectOption('high')}>High</OptionButton>
        <OptionButton onClick={() => handleSelectOption('range12')}>1~12</OptionButton>
        <OptionButton onClick={() => handleSelectOption('range1324')}>13~24</OptionButton>
        <OptionButton onClick={() => handleSelectOption('range2536')}>25~36</OptionButton>
      </div>
    </div>
      </div>
      <Button onClick={handleSpin}>Spin</Button>
      {randomNumber !== null && (
        <p>
          {result === 'win' ? 'Congratulations! You win!' : 'Sorry, you lose!'} Result: {randomNumber}
        </p>
      )}
      <p>Payout: {calculatePayout()}</p>
    </Container>
  );
};

export default Appp;
