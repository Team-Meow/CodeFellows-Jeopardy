'use-strict';

// get form values - function
const form = document.getElementById('form');
const proof = document.getElementById('proof');

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

function getTextFieldValue(){
  let textFieldValue = document.getElementById('create-profile').value;
  globalArrayPlayerProfiles.push(textFieldValue);
}

function hideButtonWhenClicked(){
  let button = document.querySelector('.hide-button');
  if(button.style.display === 'none'){
    button.style.display = 'block';
  }else{
    button.style.display = 'none';
  }
}

// event handler - call back
function profileEventHandler(event){
  event.preventDefault();

  proof.textContent = `I am listening to you! ${event.timeStamp}`;
  getTextFieldValue();
  createPlayerProfile();
  sendObjectToLocalStorage();
  hideButtonWhenClicked();
}

// event listener

// create function that removes one object from arr

// create function that hides button when create profile


// send individual objects to local storage
// TA Bryant Reference Here
function sendObjectToLocalStorage(){
  // get first item that exists in local storage, if exists
  let retrieveItem = localStorage.getItem('profile-name');
  console.log('retrievedItem', retrieveItem);

  // if cant retrieve, set item to local storage
  if(!retrieveItem){
    // set the item + stringify objects in global array
    let objectSentToStorage = localStorage.setItem( 'profile-name', JSON.stringify(globalArrayPlayerProfileObjects) );
    console.log('objectSentToStorage',objectSentToStorage);
    // return that value here
    return objectSentToStorage;

  }else{
    let parsedItem = JSON.parse(retrieveItem);
    console.log('parsedItem',parsedItem);

    parsedItem.push(globalArrayPlayerProfileObjects.pop());
    localStorage.setItem('profile-name', JSON.stringify(parsedItem));

  }
}
// retrieve objects from local
function readObjectsInLocalStorage(){
  // code here
}
readObjectsInLocalStorage();

form.addEventListener('submit', profileEventHandler);
