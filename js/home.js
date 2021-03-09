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
      console.log(globalArrayPlayerProfileObjects,'object was pushed');
      return newPlayerProfile;
    }
  }
}

function getTextFieldValue(){
  let textFieldValue = document.getElementById('create-profile').value;
  globalArrayPlayerProfiles.push(textFieldValue);
  console.log(globalArrayPlayerProfiles);
}

// event handler - call back
function profileEventHandler(event){

  getTextFieldValue();
  createPlayerProfile();
  sendObjectToLocalStorage();
  // reloadForm();
  verifyProfile(eventNameSubmit);
}

// get all objects from Local
function getObjectFromLocalStorage(){
  let retrieveItem = localStorage.getItem('profile-name');
  return retrieveItem;
}

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

// verify if player exists in local
// parse arr obj from getObjectFromLocalStorage

// function verifyProfile(eventNameSubmit){
//   console.log(eventNameSubmit);
//   let arr = [];

//   let stringifiedObjectProfiles = getObjectFromLocalStorage();

//   let parsedObjectProfiles = JSON.parse(stringifiedObjectProfiles);

//   arr.push(parsedObjectProfiles);

//   for(let i = 0; i < arr.length;i++){
//     console.log(arr);
//     // 1 arr with multiple Objects
//     for(let j = 0;j < arr[i].length;j++ ){
//       if(!eventNameSubmit === arr[i][j].name ){
//         console.log('false path',!eventNameSubmit);
//       }else{
//         console.log('true path',eventNameSubmit);
//       }
//     }
//   }

// }

// event listener
form.addEventListener('submit', profileEventHandler);
