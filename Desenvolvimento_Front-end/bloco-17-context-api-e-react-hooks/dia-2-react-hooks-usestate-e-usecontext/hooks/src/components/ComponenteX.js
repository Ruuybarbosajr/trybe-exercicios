import { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function ComponenteX() {
  const { stateA, setStateA, stateB } = useContext(AppContext)

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => setStateA('newState') }>Click</button>
    </div>
  )
}