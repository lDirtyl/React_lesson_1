import { useState, useEffect } from 'react';

//
// ============ Життєвий цикл компонента ========= Хук useEffect ============= Етап монтування ================

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
// ========================= Етап розмонтування ========================================
//

// const Modal = () => {
//   useEffect(() => {
//     // Зберігаємо ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       console.log(`Interval - ${Date.now()}`);
//     }, 2000);

//     return () => {
//       // Очищаємо інтервал за його ідентифікатором
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div>Modal</div>;
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? 'Close' : 'Open'}
//       </button>
//       {isOpen && <Modal />}
//     </div>
//   );
// };

//
// ============================= Етап оновлення ====================================
//

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

//
// ============================== Декілька ефектів ===================================
//

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   useEffect(() => {
//     document.title = `You clicked ${clicks} times`;
//   });

//   return (
//     <button onClick={() => setClicks(clicks + 1)}>
//       You clicked {clicks} times
//     </button>
//   );
// };

// const App = () => {
//   const [first, setFirst] = useState(0);
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     console.log('First updated: ', first);
//   }, [first]);

//   useEffect(() => {
//     console.log('Second updated: ', second);
//   }, [second]);

//   useEffect(() => {
//     console.log('First or second updated: ', first + second);
//   }, [first, second]);

//   return (
//     <>
//       <button onClick={() => setFirst(first + 1)}>First: {first}</button>
//       <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
//     </>
//   );
// };

//
// =========================== Робота з LocalStorage ======================================
//

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     console.log(`Clicks changed - ${clicks}`);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

// const App = () => {
//   const [clicks, setClicks] = useState(0);

//   useEffect(() => {
//     // window.localStorage.setItem('key', JSON.stringify({}));

//     window.localStorage.setItem('saved-clicks', clicks);
//   }, [clicks]);

//   return (
//     <div>
//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//       <button onClick={() => setClicks(0)}>Reset</button>
//     </div>
//   );
// };

const App = () => {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    if (savedClicks !== null) {
      return savedClicks;
    }
    return 0;
  });

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>
        You clicked {clicks} times
      </button>
      <button onClick={() => setClicks(0)}>Reset</button>
    </div>
  );
};

// export default App;
