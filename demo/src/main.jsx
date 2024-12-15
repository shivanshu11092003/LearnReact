import { StrictMode,useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Avatar } from "./App.jsx";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";


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

const Use = ()=>{
  const [form,setForm] = useState({
    firstName:'Shivanshu',
    lastName:"Gupta",
    email:"shivanshu@gmail.com"
  });

  return (

    <>
      <label>
        First name:
        <input value={form.firstName} onChange={e =>{
          setForm({...form,firstName})
        }}></input>

      </label>

    </>

  );


}

const TrafficLight = () =>{
  const [walk ,setwalk] = useState(true);
  const handleClick = () =>{
    setwalk(!walk);
  }

  return (
    <>
    <button onClick={handleClick}>
      Change to {walk ? 'Stop':'Walik'}

    </button>
    <h1 style={{
      color:walk?"green" : "red"
    }}>
      {walk ? 'Walk':'Stop'}

    </h1>
    </>

  );
}

const contactsList = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

const Contact = () =>{
  const [to,setTo] = useState(contactsList[0])
  return (
    <div>
    <ContactList 
      selectedContact={to}

    contacts={contactsList}
    onSelect={contact =>setTo(contact)}

     />
     <Chat key={to.email} contact={to} />   
    </div>
  );
}



createRoot(document.getElementById("root")).render(
  <StrictMode>

  </StrictMode>
);
