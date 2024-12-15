import { useState } from 'react'
import { getImageUrl } from './utlis' 
import { useReducer } from 'react';
import TaskList from './TaskList.jsx';

import "./styles.css";

const person = {
  name:"Shivanshu",
  theme:{
    backgroundColor:'red',
    color:'pink'
  }
}

export function Ava(){
  const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
  const description = 'Gregorio Y. Zara';

  return (
    <>
    <h1 style={{backgroundColor:"red"}}>{avatar}</h1>
    <h3>    {description}    </h3>
    </>

  );
}

export default function App({}) {
  return (
    <div style={person.theme}>

      <h1>{person.name}</h1>


    </div>

    )
}

export function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}


//Reducer

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

function AddTask({onAddTask}) {
  const [text, setText] = useState('');
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setText('');
          onAddTask(text);
        }}>
        Add
      </button>
    </>
  );
}


function taskReducer(tasks,action){
  switch(action.type){
    case 'added':{
      return [
        ...tasks,{
          id:action.id,
          text:action.text,
          done:false
        }
      ];
    }

    case 'changed':{
      return tasks.map((t) =>{
       if(t.id === action.task.id){
        return action.task;
       }else{
        return t;
       }
      })
    }

    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export function Task(){

  const [tasks,dispatch] = useReducer(taskReducer,initialTasks)
  
  const handleAddTask = (text) =>{
    dispatch({
      type:'added',
      id: nextId++,
      text:text
    });
  }  

  const handleChangeTask = (task) =>{
    dispatch({
      type: 'changed',
      task:task
    });
  }

  const handleDeleteTask =(taskId)=>{
    dispatch({
      type:'deleted',
      id:taskId

    });

  }

  return (
    <>
    <h1>Shivanshu</h1>
    <AddTask onAddTask={handleAddTask} />
    <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />

    </>

  );
}


