import React from 'react';
import MotionGame from './components/MotionGame';

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-black text-white overflow-hidden relative selection:bg-none">
      <MotionGame />
    </div>
  );
};

export default App;