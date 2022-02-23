import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [multiple, setMultiple] = useState('')

   useEffect(() => {
    setInterval(() => setRandomNumber(Math.floor(Math.random() * 100)), 10000)
   }, [])

   useEffect(() => {
     const multipleFive = randomNumber % 5 === 0
     const multipleThree = randomNumber % 3 === 0
     if(multipleFive && multipleThree) setMultiple('Acerto')
   }, [randomNumber])

   useEffect(() => {
    setInterval(() => setMultiple('') ,4000);
   }, [multiple])

   useEffect(() => () => clearInterval(), [])

  return (
    <>
      <h1>{randomNumber}</h1>
      <p>{multiple}</p>
    </>
  );
}

export default App;
