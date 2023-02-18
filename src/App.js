import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));

  function random2() {
    console.log(contacts);
    let randomItem = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomItem);
    setContact([randomItem]);

    let newState = [...contact];
    newState.push(randomItem);
    setContact(newState);
  }

  function sortContact() {
    const sortedContacts = [...contact];
    sortedContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (b.name < a.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContact(sortedContacts);
  }

  function sortPopularity() {
    const sortedPopularity = [...contact];
    sortedPopularity.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (b.popularity < a.popularity) {
        return -1;
      }
      return 0;
    });
    setContact(sortedPopularity);
  }


  
  function deleteContact(elemental) {
    const sortedDeletedContacts = [...contact]
    const sortedDeletedContactsArr = sortedDeletedContacts.filter((contact) => {
      return elemental !== contact.id
    })
    setContact(sortedDeletedContactsArr)
  }
  
 

  return (
    <div className="App">
      <h2> Contact list</h2>
      <button onClick={random2}>Add a random</button>

      <button onClick={sortContact}>Sort by Name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      {contact.map((contact) => {
        return (
          <table>
            <li>Name:{contact.name}</li>
            <li>
              Picture:
              <img src={contact.pictureUrl} alt="logo" />
            </li>
            <li>Popularity:{contact.popularity}</li>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
         
         
          </table>
        );
      })}
    </div>
  );
}

export default App;


