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
  this.isNew = true;
  this.netScore = 0;
}

// create player profile - function
function createPlayerProfile(){
  for(let i = 0; i < globalArrayPlayerProfiles.length; i++){
    if(globalArrayPlayerProfiles.length > 0){
      let name = document.getElementById('create-profile').value;
      let newPlayerProfile = new PlayerProfileConstructor(name);
      globalArrayPlayerProfileObjects.push(newPlayerProfile);
      return newPlayerProfile;
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

// function reloadForm(){
//   window.location.reload();
// }


// event handler - call back
function profileEventHandler(event){
  event.preventDefault();

  proof.textContent = `I am listening to you! ${event.timeStamp}`;
  getTextFieldValue();
  createPlayerProfile();
  sendObjectToLocalStorage();
  hideButtonWhenClicked();
  // reloadForm();
}

// TA Bryant Reference Here

function sendObjectToLocalStorage(){
  // get first item that exists in local storage, if exists
  getObjectFromLocalStorage();

  // if cant retrieve, set item to local storage
  if(!getObjectFromLocalStorage()){
    // set the item + stringify objects in global array
    let sendObject = localStorage.setItem( 'profile-name', JSON.stringify(globalArrayPlayerProfileObjects) );

    // return that value here
    console.log(sendObject);
    return sendObject;

  }else{

    let parsedItem = JSON.parse(getObjectFromLocalStorage());

    parsedItem.push(globalArrayPlayerProfileObjects.pop());
    localStorage.setItem('profile-name', JSON.stringify(parsedItem));

    return parsedItem;
  }
}

// get all objects from Local
function getObjectFromLocalStorage(){
  let retrieveItem = localStorage.getItem('profile-name');
  return retrieveItem;
}

// verify if player exists in local
// parse arr obj from getObjectFromLocalStorage

let arrLocalObjects = [];
function verifyProfile(){
  let stringifiedObjectProfiles = getObjectFromLocalStorage();
  let parsedObjectProfiles = JSON.parse(stringifiedObjectProfiles);
  arrLocalObjects.push(parsedObjectProfiles);

  console.log(parsedObjectProfiles);

  let targetPlayerProfile = getTextFieldValue();

  // if(){
  //   //code
  // }

}
verifyProfile();

// event listener
form.addEventListener('submit', profileEventHandler);
