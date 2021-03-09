'use-strict';

var table = document.getElementById('lb-table');
console.log(table);
let header = document.getElementById('table-header');
let tbody = document.getElementById('table-body');
let footer = document.getElementById('table-footer');

function tableHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  let th = document.createElement('th');

  th.textContent = 'somthin';

  // tr.appendChild(th);

  thead.appendChild(th);
  thead.appendChild(tr);
  table.appendChild(tr);

  for(var i =0; i<3;i++){
    let td = document.createElement('td');
    td.textContent = 'hola';
    tr.appendChild(td);
  }


}
tableHeader();


// let stringifiedObjectProfiles = localStorage.getItem('profile-name');
// let parsedObjectProfiles = JSON.parse(stringifiedObjectProfiles);
// arr.push(parsedObjectProfiles);
