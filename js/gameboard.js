'use strict';

// global variables
let tileSelect = document.querySelector('#gameboard');
let modalBg = document.querySelector('.modal-bg');
let playerScore = 0;
let gameCategories = [];

// Category Constructor



// add questions method






// validate answer function






// used youtube to figure out modal js https://www.youtube.com/watch?v=KjQ8uvAt9kQ
function questionClick(event) { //eslint-disable-line
  modalBg.classList.add('bg-active');
}

// Submit eventlistener

tileSelect.addEventListener('click', questionClick);
