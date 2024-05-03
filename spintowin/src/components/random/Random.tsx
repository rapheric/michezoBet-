import React from "react";
import { css } from '@emotion/react';
const Random = () => {
    // const [randomNumber, setRandomNumber] = useState<number|null>(null)

    // const generateRandomNumber = () => {
    //   const min = 0;
    //   const max = 36;
    //   const newRandomNumber = Math.floor(Math.random() * (max - min + 0));
    //   setRandomNumber(newRandomNumber);
    // };
  
    // return (
    //   <>
    //     {randomNumber}
    //   <div>
    //     <button onClick={generateRandomNumber}>Generate Random Number</button>
    //   </div>
    //   </>
    // );
    // Function to generate a random number between min (inclusive) and max (inclusive)
  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Array to store the random numbers
  const randomNumbers: number[] = [];

  // Generate 37 random numbers and store them in the array
  for (let i = 0; i < 37; i++) {
    randomNumbers.push(getRandomNumber(0, 36)); 
  }
  // css={listStyles}
  return (
    <div >
      <ul>
        {randomNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}



export default Random