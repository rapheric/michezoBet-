import React, { useState } from "react";

interface Bet {
  option: string;
  amount: number;
}

const UndoRedoExample: React.FC = () => {
  const [selectedBets, setSelectedBets] = useState<Bet[]>([]);
  const [undoStack, setUndoStack] = useState<Bet[][]>([]);
  const [redoStack, setRedoStack] = useState<Bet[][]>([]);

  const addBet = (option: string, amount: number) => {
    const newBet: Bet = { option, amount };
    setSelectedBets([...selectedBets, newBet]);
    setUndoStack([...undoStack, [...selectedBets]]);
    setRedoStack([]);
  };

  const undo = () => {
    if (undoStack.length > 0) {
      const prevBets = undoStack.pop() as Bet[];
      setRedoStack([...redoStack, [...selectedBets]]);
      setSelectedBets(prevBets);
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextBets = redoStack.pop() as Bet[];
      setUndoStack([...undoStack, [...selectedBets]]);
      setSelectedBets(nextBets);
    }
  };

  return (
    <div>
      <label htmlFor="options">Select Options:</label>
      <select id="options">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <input type="number" id="betAmount" placeholder="Enter Bet Amount" />
      <button onClick={() => addBet("selectedOption", 10)}>Add Bet</button>
      <button onClick={undo}>Undo</button>
      <button onClick={redo}>Redo</button>
      <div>
        {selectedBets.map((bet, index) => (
          <div key={index}>
            {bet.option} - ${bet.amount}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UndoRedoExample;
