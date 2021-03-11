'use strict';

const form = document.getElementById('form');
let globalArrayPlayerProfiles = [];

let globalArrayPlayerProfileObjects = [];

function PlayerProfileConstructor(name){
  this.name = name;
  this.score = 0;
}

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

function profileEventHandler(event){
  getTextFieldValue();
  createPlayerProfile();
  sendObjectToLocalStorage();
}

function getObjectFromLocalStorage(){
  let retrieveItem = localStorage.getItem('profile-name');
  return retrieveItem;
}

function sendObjectToLocalStorage(){
  getObjectFromLocalStorage();

  if(!getObjectFromLocalStorage()){
    let sendObject = localStorage.setItem( 'profile-name', JSON.stringify(globalArrayPlayerProfileObjects) );
    return sendObject;
  }else{
    let parsedItem = JSON.parse(getObjectFromLocalStorage());
    parsedItem.push(globalArrayPlayerProfileObjects.pop());
    localStorage.setItem('profile-name', JSON.stringify(parsedItem));
    return parsedItem;
  }
}

form.addEventListener('submit', profileEventHandler);
