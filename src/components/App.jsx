// import CustomButton from './CustomButton';
// import ClickCounter from './ClickCounter';

import { useState } from 'react';

// const App = () => {
//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//     </>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   const handleToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>Current: {clicks}</button>
//       <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
//       {isOpen && <p>Now you can see me!</p>}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <>
//       <ClickCounter />
//       <ClickCounter />
//     </>
//   );
// };
const ClickCounter = ({ value, onUpdate }) => {
  return <button onClick={onUpdate}>Current: {value}</button>;
};

const App = () => {
  const [clicks, setClicks] = useState(0);

  // Функція, яку будемо передавати в ClickCounter
  // для виклику під час кліку
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
    </>
  );
};

export default App;
