import { useState } from 'react'
import { getImageUrl } from './utlis' 

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



