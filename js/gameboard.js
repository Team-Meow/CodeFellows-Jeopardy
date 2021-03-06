'use strict';

// global variables
let tileSelect = document.querySelector('#gameboard');
let modalBg = document.querySelector('.modal-bg');
let gameForm = document.querySelector('#modalQuestion');
let playerScore = 0;
let gameCategories = [];


// Category Constructor
function Category(catName) {
  this.catName = catName;
  this.catQuestions = [];
  gameCategories.push(this);
}


// add questions method
Category.prototype.addQuestion = function (question, answer, a, b, c, points) {
  this.catQuestions.push({
    question,
    answer,
    a,
    b,
    c,
    points,
  });
};


// new category instances
let htmlCategory = new Category('HTML');
htmlCategory.addQuestion('Test Question', 'banana', 'wrong', 'correct', 'banana', 100);
htmlCategory.addQuestion('Test Q2', 'right', 'right', 'wrong', 'yeah', 100);


let cssCategory = new Category('CSS');
cssCategory.addQuestion('Test Q1', 'correctanswer', 'optionA', 'correctanswer', 'optionC', 100);

let jsCategory = new Category('JAVASCRIPT');
jsCategory.addQuestion();


let gitCategory = new Category('GIT COMMANDS');
gitCategory.addQuestion();


let ghCategory = new Category('GITHUB');
ghCategory.addQuestion();



// validate answer function





// render to form in modal window


// eventlistener function for answering question
function submitAnswer(event) { //eslint-disable-line
  event.preventDefault();
  let a = 'a';
  let b = 'b';
  let c = 'c';

 
  if (!event.target.a && !event.target.b && !event.target.c) {
    alert('hey');
  }

  if (event.target.a === true) {
    validateOption(a, event.target.category.value, event.target.question.value);
  } else if (event.target.b === true) {
    validateOption(b, event.target.category.value, event.target.question.value);
  } else if (event.target.c === true) {
    validateOption(c, event.target.category.value, event.target.question.value);
  }
}

function validateOption(playerAnswer, gameCat, question) {

}

// used youtube to figure out modal js https://www.youtube.com/watch?v=KjQ8uvAt9kQ
function questionClick(event) { //eslint-disable-line
  modalBg.classList.add('bg-active');
}



tileSelect.addEventListener('click', questionClick);
gameForm.addEventListener('submit', submitAnswer);
