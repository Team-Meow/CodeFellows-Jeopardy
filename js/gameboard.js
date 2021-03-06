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
let htmlCategory = new Category('html');
htmlCategory.addQuestion('Test Question', 'banana', 'apple', 'orange', 'banana', 100);
htmlCategory.addQuestion('Test Q2', 'cat', 'dog', 'bird', 'cat', 200);


let cssCategory = new Category('css');
cssCategory.addQuestion('Test Q1', 'correctanswer', 'optionA', 'correctanswer', 'optionC', 100);

let jsCategory = new Category('javascript');
jsCategory.addQuestion();


let gitCategory = new Category('git');
gitCategory.addQuestion();


let ghCategory = new Category('github');
ghCategory.addQuestion();



// validate answer function





// render to form in modal window



// eventlistener function for answering question
function submitAnswer(event) { //eslint-disable-line
  event.preventDefault();
  let playerAnswer = event.target.options.value;
  let category = document.getElementById('category').value;
  let answeredCorrectly = false;
  console.log('here', playerAnswer, category);

  for(let i = 0; i < gameCategories.length; i++){
    if (category === gameCategories[i].catName) {
      for (let j = 0; j < gameCategories[i].catQuestions.length; j++) {
        console.log(gameCategories[i].catQuestions[j].answer);
        if (playerAnswer === gameCategories[i].catQuestions[j].answer) {
          answeredCorrectly = true;
          console.log('victory!', answeredCorrectly);
        }
      }

    }

  }




  // let a = 'a';
  // let b = 'b';
  // let c = 'c';

  // console.log(event.target.options.value);

  // if (!event.target.a && !event.target.b && !event.target.c) {
  //   alert('hey');
  // }

  // if (event.target.a === true) {
  //   validateOption(a, event.target.category.value, event.target.question.value);
  // } else if (event.target.b === true) {
  //   validateOption(b, event.target.category.value, event.target.question.value);
  // } else if (event.target.c === true) {
  //   validateOption(c, event.target.category.value, event.target.question.value);
  // }
}

// function validateOption(playerAnswer, gameCat, question) {

// }

function renderModal(obj, question) {
  document.getElementById('category').setAttribute('value', obj.catName);
  document.getElementById('question').setAttribute('value', question.question);
  document.getElementById('inputA').setAttribute('value', question.a);
  document.getElementById('inputB').setAttribute('value', question.b);
  document.getElementById('inputC').setAttribute('value', question.c);
  document.getElementById('a').setAttribute('for', question.a);
  document.getElementById('b').setAttribute('for', question.b);
  document.getElementById('c').setAttribute('for', question.c);

  // console.log(question);
  document.getElementById('questionText').textContent = question.question;
  document.getElementById('a').textContent = question.a;
  document.getElementById('b').textContent = question.b;
  document.getElementById('c').textContent = question.c;
}

// renderModal(gameCategories[0]);



// used youtube to figure out modal js https://www.youtube.com/watch?v=KjQ8uvAt9kQ
function questionClick(event) { //eslint-disable-line
  // getEvent.target and pass relevant info to modal
  let category = event.target.classList[0];
  let question = +event.target.classList[1];

  for (let i = 0; i < gameCategories.length; i++) {
    if (category === gameCategories[i].catName) {
      for (let j = 0; j < gameCategories[i].catQuestions.length; j++) {
        // console.log(gameCategories[i].catQuestions[j].points);
        if (question === gameCategories[i].catQuestions[j].points) {
          renderModal(gameCategories[i], gameCategories[i].catQuestions[j]);
        }
      }

    }
  }
  // console.log(category, question);

  // render the modal here
  modalBg.classList.add('bg-active');
}



tileSelect.addEventListener('click', questionClick);
gameForm.addEventListener('submit', submitAnswer);
