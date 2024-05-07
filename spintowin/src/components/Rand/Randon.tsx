import React, { useState } from 'react';
import styled from '@emotion/styled';

// Styled components for Emotion.js
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ResultText = styled.p<{ outcome: 'win' | 'lose' | null }>`
  font-size: 18px;
  margin-top: 20px;
  color: ${props => {
    switch (props.outcome) {
      case 'win':
        return 'green';
      case 'lose':
        return 'red';
      default:
        return 'black';
    }
  }};
`;

// Main component
const Randon: React.FC = () => {
  const [result, setResult] = useState<number | null>(null);
  const [betNumber, setBetNumber] = useState<number>(0);
  const [betAmount, setBetAmount] = useState<number>(10);
  const [outcome, setOutcome] = useState<'win' | 'lose' | null>(null);

  // Function to handle the spin button click
  const handleSpin = () => {
    // Generate a random number between 0 and 36
    const randomNumber = Math.floor(Math.random() * 37);

    // Determine the outcome based on the random number and the selected bet amount
    if (randomNumber === betNumber) {
      setOutcome('win');
    } else {
      setOutcome('lose');
    }
    setResult(randomNumber);
  };

  return (
    <Container>
      <div>
      <p>Place the number you would like to predict:</p>
        <input
          type="number"
          value={betNumber}
          onClick={() => setBetNumber(Number(betNumber))}
        />
        <p>Place your bet amount (10 to 500):</p>
        <input
          type="number"
          value={betAmount}
          onChange={e => setBetAmount(Number(e.target.value))}
          min={10}
          max={500}
        />
      </div>
      <Button onClick={handleSpin}>Spin</Button>
      {result !== null && (
        <ResultText outcome={outcome}>
          {outcome === 'win' ? 'Congratulations! You win!' : 'Sorry, you lose!'} Result: {result}
        </ResultText>
      )}
    </Container>
  );
};

export default Randon;
