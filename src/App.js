
import './App.css';
import Contacts from "./contacts.json";
import { useState } from "react";

function App() {

  const [contacts, setContacts] = useState(Contacts.slice(0,5));

  function randomContact(){
    const index = Math.floor(Math.random()*(Contacts.length));
    let newContact = Contacts[index];

    let copy = [...contacts];

    // loop for, compare avec !==, if not include => push  ?
    for(let i = 0; i < Contacts.length; i++){
      for(let j = 0; j < copy.length; j++){
        if(Contacts.id !== copy.id){
          copy.push(newContact)
        }
      }
    }
    copy.push(newContact)
    setContacts(copy)


    // let sortAlpha = copy.sort(function(a,b){
    //   a.localeCompare(b)
    // });

  //   copy.sort(function(a, b){
  //     if(a.name < b.tname) { return -1; }
  //     if(a.name > b.name) { return 1; }
  //     return 0;
  // })

  copy.sort(function (a, b) {
    return a.name - b.name;
  });

  }




  // ITERATION 4
  // The producer asked you to add two new buttons to help them sort 
  // their contacts. When you click on one of the buttons, it should 

  // sort the table by name (alphabetically), and when you click the 
  // other, it should sort by popularity (highest first).

  // Once you have sorted the array, remember to update the state 
  // variable holding the contacts.

  // ITERATION 3
  // First, randomly select a contact from the array of remaining 
  // contacts. Then add that contact to the array that lives in your 
  // state (that's the previously created array of 5 contacts). 
  // Do not modify the state directly. Instead, use the state 
  // updater function returned from the useState().
  

  return (
    <div className="App">
    <h1> IronContacts </h1>
    <button onClick={randomContact}> Add Random Contact</button>
      <div className='tableOne'>
      <table>
        <thead>
        {/* 5 categories */}
          <tr> 
            <th> Picture</th>  
            <th> Name </th>
            <th> Popularity</th>
            <th> Won Oscar</th>
            <th> Won Emmy</th>
          </tr>
        </thead>

      <tbody>
        {contacts.map((element) => (
          <tr key={element.id}>
            <td>
            {/* 5 categories */}
              <img
              src={element.pictureUrl}
              alt ={element.name}
              style ={{width:100}}
              />
            </td>
            <td>{element.name}</td>
            <td>{element.popularity}</td>
            <td>{element.wonOscar ? "🏆 ": "" }</td>
            <td>{element.wonEmmy ? "🏆" : "" }</td>
          </tr>
        ))}
      </tbody>

      </table>

      </div>
    </div>
  );
}

export default App;


// ITERATION 1
// Once done, create a state variable named contacts and  
// store an array containing the first 5 contacts.

// Display that array of 5 contacts as a list in a <table> and 
// display the picture, name, and popularity of each contact.

// For now, let's render the content in App.js. This being said,
//  don't proceed to create a dedicated component for the contact 
//  list. The reason will become a bit clearer later when we add 
//  the delete button next to each contact. You are probably not yet 
//  familiar with the concept of "lifting state up" and passing 
//  callbacks as props. For this reason, it is better to render 
//  everything in one component for the moment.