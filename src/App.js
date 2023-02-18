import contacts from "./contacts.json";
import './App.css';
import { useState } from "react";

function App() {
    const [contact, setContact] = useState(contacts)
  
  const slicedContacts = contacts.slice(0, 5)
  
  // function RandomContact() {
  //   const [contact, setContact] = useState(contacts)

  //   function newRandomContact(contact) {
  //     return contact.floor[(Math.random()*contact.length)]
  //   }
  //   setContact(newRandomContact)
    
    // const newRandomContact = contactId => {
    //   return contactid[Math.floor(Math.random()*contactId.length)]
    // }


  return (
    <div className="App">
      <h2> Contact list</h2>
      {/* <button onClick={RandomContact}>Add new random contact</button> */}
      {slicedContacts.map(contact => {
        return (
          <table>
        <li>Name:{contact.name}</li>
        <li>Picture:<img src={contact.pictureUrl} alt='logo'/></li>
        <li>Popularity:{contact.popularity}</li>
        
      </table>
        )
      })}
      
    </div>
  );
}

export default App;
