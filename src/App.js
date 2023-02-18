import contacts from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));

  // const slicedContacts = contacts.slice(0, 5);



  function RandomContact() {
    function newRandomContact() {
      return contacts.floor[Math.random() * contacts.length];
    }
    // setContact(newRandomContact);
    console.log(newRandomContact())
  }
  // items[Math.floor(Math.random()*items.length)];

  function random2() {
    console.log(contacts)
    let randomItem = contacts[Math.floor(Math.random() * contacts.length)]
    console.log(randomItem)
    setContact([randomItem])

    let newState = [...contact]
newState.push(randomItem)
    setContact(newState)
  }

  function sortContact() {
    const sortedContacts = [...contacts]
    sortedContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (b.name < a.name) {
        return 1
      } else {
        return 0
      }
    })
    setContact(sortedContacts)
  }

  function sortPopularity() {
    const sortedPopularity = [...contacts]
    sortedPopularity.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1
      } else if (b.popularity < a.popularity) {
        return -1
      } 
      return 0
    })
    setContact(sortedPopularity)
  }

  const deleteContact = value => {
    setContact(oldValues => {
      return oldValues.filter(contact => contact.id !== value)
    })
  }

  // function deleteContact(contactId){
     
  //     const filteredContact = contacts.filter(con => {
  //       return con.id !==contactId
  //     })
  //     setContact(filteredContact)
    
  // }
    // let deleteContact = contactId => {
    //   const filteredContact = contacts.filter(contact => {
    //     return contact._id !== contactId
    //   })
    //   setContact(filteredContact)
    // }
   
  
  return (
    <div className="App">
      <h2> Contact list</h2>
      <button onClick={random2}>second random</button>
      <button onClick={RandomContact}>Add new random contact</button>
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
            {/* <button onClick={deleteContact}>delete contact</button> */}
            <button onClick={() => deleteContact(contact)}> Delete</button>

          </table>
          
        );
      })}
    </div>
  );
}

export default App;

// import { useState } from 'react';

// export default function App() {
//   const initialState = [
//     { id: 1, name: 'Banana', amount: 5 },
//     { id: 2, name: 'Apple', amount: 6 },
//   ];

//   const removeSecond = () => {
//     setFruits((current) =>
//       current.filter((fruit) => fruit.id !== 2)
//     );
//   };

//   const [fruits, setFruits] = useState(initialState);

//   return (
//     <div style={{ margin: '16px' }}>
//       <button onClick={removeSecond}>Remove second</button>
//       {fruits.map((fruit) => (
//         <div key={fruit.id}>
//           <h2>Name: {fruit.name}</h2>
//           <h2>Amount: {fruit.amount}</h2>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// }