'use strict';
let table = document.getElementById('table-container');
let thead = document.getElementById('table-thead');
let tbody = document.getElementById('table-tbody');

function tableHeader(){
  let tr = document.createElement('tr');
  let thName = document.createElement('th');
  let thScore = document.createElement('th');

  thName.textContent = 'Name';
  thScore.textContent = ' Score ';

  tr.appendChild(thName);
  tr.appendChild(thScore);
  thead.appendChild(tr);
  table.appendChild(thead);
}
tableHeader();

function tableBody(name,score){
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let tdTwo = document.createElement('td');

  td.textContent = name;
  tdTwo.textContent = score;

  tr.appendChild(td);
  tr.appendChild(tdTwo);
  tbody.appendChild(tr);
  table.appendChild(tbody);
}

function getNameScore(){
  let recievedFromLocal = localStorage.getItem('profile-name');
  let dataRetrieved = JSON.parse(recievedFromLocal);
  let arr = [];
  arr.push(dataRetrieved);

  let scoreProp = JSON.parse(localStorage.getItem('score'));

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      let nameProp = arr[i][j].name;
      tableBody(nameProp,scoreProp);
    }
  }
}
getNameScore();

