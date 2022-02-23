// import React from 'react';
// import './App.css';

import ComponenteX from './components/ComponenteX';

// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       task: '',
//       taskList: [],
//     }
//   }

//   handleChange = ({ target }) => this.setState({task: target.value})

//   addTask = () => {
//     const {task} = this.state;
//     this.setState((prevState) => ({taskList: prevState.taskList.concat(task)}))
//   }

//   render() {
//     const {task, taskList} = this.state;
//     return (
//       <div>
//         <input type="text" value={ task } onChange={ this.handleChange }/>
//         <button onClick={ this.addTask }>Adicionar</button>
//         <ul>
//           {taskList.map((task) => (
//             <li>{task}</li>
//           ))}
//         </ul>
//       </div>
//       );
//     }
// }

// export default App;

// import { useState } from 'react'; 

// export default function App() {
//   const [task, setTask] = useState('')
//   const [taskList, setList] = useState([])

//   return (
//     <div>
//        <input type="text" value={ task } onChange={({target}) => setTask(target.value)}/>
//        <button onClick={ () => setList((prevState) => {
//          console.log(prevState);
//          return [...prevState, task]
//        }) }>Adicionar</button>
//        <ul>
//          {taskList.map((task) => <li>{task}</li>)}
//        </ul>
//     </div>
//   )
// }

export default function App() {
  return <ComponenteX /> 
}