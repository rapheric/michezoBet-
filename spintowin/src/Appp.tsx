import React, { useState } from 'react';

const App: React.FC = () => {
  const [value, setValue] = useState<string>('Initial value');
  const [history, setHistory] = useState<string[]>([value]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    setHistory([...history.slice(0, currentIndex + 1), newValue]);
    setCurrentIndex(currentIndex + 1);
  };

  const handleUndo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setValue(history[currentIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setValue(history[currentIndex + 1]);
    }
  };

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => handleChange('New value')}>Change Value</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
};

export default App;
