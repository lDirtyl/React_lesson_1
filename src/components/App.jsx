import { useState, useEffect } from 'react';

//
// ============ Життєвий цикл компонента ========= Хук useEffect ============= Етап монтуванн я================

// const App = () => {
//   const [clicks, setClicks] = useState(0);

// useEffect(() => {
//   document.title = `You clicked ${clicks} times`;
// });

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   return (
//     <button
//       onClick={() => {
//         setClicks(clicks + 1);
//       }}
//     >
//       You clicked {clicks} times
//     </button>
//   );
// };

//
// =========================Етап розмонтування========================================
//

const Modal = () => {
  useEffect(() => {
    setInterval(() => {
      console.log(`Interval - ${Date.now()}`);
    }, 2000);
  }, []);

  return <div>Modal</div>;
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && <Modal />}
    </div>
  );
};
export default App;
