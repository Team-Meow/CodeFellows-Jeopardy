'use strict';

// used youtube to figure out modal js https://www.youtube.com/watch?v=KjQ8uvAt9kQ
let tileSelect = document.querySelector('#gameboard');
let modalBg = document.querySelector('.modal-bg');

function questionClick(event) { //eslint-disable-line
  modalBg.classList.add('bg-active');
}

tileSelect.addEventListener('click', questionClick);
