'use-strict';

// array to hold player name
let globalArrayPlayerProfiles = [];
// array to hold player object
let globalArrayPlayerProfileObjects = [];

//create constructor for player profile
function PlayerProfileConstructor(name){
  this.name = name;
}

// create player profile - function
function createPlayerProfile(){
  for(let i = 0; i < globalArrayPlayerProfiles.length; i++){
    if(globalArrayPlayerProfiles.length > 0){
      let name = document.getElementById('create-profile').value;
      let newPlayerProfile = new PlayerProfileConstructor(name);
      globalArrayPlayerProfileObjects.push(newPlayerProfile);
      return newPlayerProfile;
    }else{
      return null;
    }
  }
}

// get form values - function
const form = document.getElementById('form');
const proof = document.getElementById('proof');

function getTextFieldValue(){
  let textFieldValue = document.getElementById('create-profile').value;
  globalArrayPlayerProfiles.push(textFieldValue);
}

// event handler - call back
function profileEventHandler(event){
  event.preventDefault();

  getTextFieldValue();
  createPlayerProfile();
  console.log(globalArrayPlayerProfileObjects[0]);
  sendObjectToLocalStorage();

  proof.textContent = `I am listening to you! ${event.timeStamp}`;
}

// event listener
form.addEventListener('submit', profileEventHandler);


// create function that removes one object from arr


// send individual objects to local storage
// 
function sendObjectToLocalStorage(){
  let retrieveItem = localStorage.getItem('profile-name');

  if(!retrieveItem){
    let objectSentToStorage = localStorage.setItem( 'profile-name', JSON.stringify(globalArrayPlayerProfileObjects) );
    return objectSentToStorage;
  }else{
    let parsedItem = JSON.parse(retrieveItem);
    parsedItem.push(globalArrayPlayerProfileObjects.pop());
    localStorage.setItem('profile-name', JSON.stringify(parsedItem));
  }
}

// retrieve objects from local
function readObjectsInLocalStorage(){
  // code here
}
readObjectsInLocalStorage();
