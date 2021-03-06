'use strict';

// global variables
let tileSelect = document.querySelector('#gameboard');
let modalBg = document.querySelector('.modal-bg');
let playerScore = 0;
let gameCategories = [];

// Category Constructor
function Category(catName) {
  this.catName = catName;
  this.catQuestions = [];
  gameCategories.push(this);
}


// add questions method
Category.prototype.addQuestion = function(question, answer, a, b, c, points){
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
htmlCategory.addQuestion('Test Question', 'banana', 'wrong', 'correct', 'banana',100);
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






// used youtube to figure out modal js https://www.youtube.com/watch?v=KjQ8uvAt9kQ
function questionClick(event) { //eslint-disable-line
  modalBg.classList.add('bg-active');
}

// Submit eventlistener

tileSelect.addEventListener('click', questionClick);
