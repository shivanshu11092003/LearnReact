import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Avatar } from "./App.jsx";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

function Profile({ imageId, name }) {
  return (
    <section>
      <h2>{name}</h2>
      <img src={imageId} />
    </section>
  );
}

const Item = ({Name, isPacked}) => {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  return(people.map(person => <li>{person}</li>));
};



const Button = ({onClick,children})=>{
  return (

    <button onClick={onClick}>
      {children}
    </button>

  );

}
const Toolbar = ({onPlay,onUpload})=>{
  return (
   <>
    <Button onClick={onPlay}/>
    <Button onClick={onUpload}/>
   </>
  );

}


createRoot(document.getElementById("root")).render(
  <StrictMode>
   <Toolbar onPlay={()=> alert("Playing")} 
   onUpload={()=>{alert("uploading")}} />
  </StrictMode>
);
