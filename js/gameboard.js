'use strict';
let tileSelect = document.querySelector('#gameboard');
let modalBg = document.querySelector('.modal-bg');
let gameForm = document.querySelector('#modalQuestion');
let playerScore = 0;
let eventCounter = 0;
let topScore = 7500;
let gameCategories = [];

function Category(catName) {
  this.catName = catName;
  this.catQuestions = [];
  gameCategories.push(this);
}

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

let htmlCategory = new Category('html');
htmlCategory.addQuestion('What tag do you need to run JavaScript code in an html file?', '<script></script>', '<js></js>', '<javascript></javascript>', '<script></script>', 100);
htmlCategory.addQuestion('The elements we need to put inside of a form are: input, button and _____?', 'label', 'submit', 'label', 'legend', 200);
htmlCategory.addQuestion('What is the basic structure of an HTML template?', 'Html, head, body, footer', 'Html, head, body, footer', 'Header, main, html', 'Html, header, body, main', 300);
htmlCategory.addQuestion('This declaration represents the document type and helps the browser to display the web page correctly.', '<!DOCTYPE>', '{iDOCTYPE}', '<html>', '<!DOCTYPE>', 400);
htmlCategory.addQuestion('What is the correct HTML element for playing audio files?', '<audio>', '<sound>', '<audio>', '<mp3>', 500);

let cssCategory = new Category('css');
cssCategory.addQuestion('What does CSS stand for?', 'cascading style sheets', 'cascading steel ship', 'cascading style sheets', 'call style sheet', 100);
cssCategory.addQuestion('In CSS, the selector points to?', 'element to style', 'index', 'element to style', 'the html', 200);
cssCategory.addQuestion('What CSS property is used to change the text color of an element?', 'color', 'background color', 'color', ':pseudo-color', 300);
cssCategory.addQuestion('In CSS, which value is a predefined key-word value for float?', 'inline-start', 'top', 'inline-start', 'inline-finish', 400);
cssCategory.addQuestion('This special class is used to define the state of an element.', 'pseudo-class', 'sumo-class', 'first-class', 'pseudo-class', 500);

let jsCategory = new Category('javascript');
jsCategory.addQuestion('Which is not a data type?', 'attribute', 'string', 'attribute', 'boolean', 100);
jsCategory.addQuestion('In JavaScript, the "=" operator is used for what purpose?', 'To assign a value to a variable.', 'To check for equality.', 'There is no purpose.', 'To assign a value to a variable.', 200);
jsCategory.addQuestion('What does Math.floor() do?', 'It truncates the decimal values from a floating point number.', 'It truncates the decimal values from a floating point number.', 'It generates decimal numbers of the number digits that are passed in as an argument.', 'It takes a decimal and invokes it up to the next higher integer value.', 300);
jsCategory.addQuestion('A function ________ loads before any code is executed.', 'declaration', 'invocation', 'expression', 'declaration', 400);
jsCategory.addQuestion('Which of the following is/are true about JavaScript object properties?', 'Variables declared inside constructor functions are locally scoped and cannot be directly accessed as properties.', 'Variables declared inside constructor functions are globally scoped.', 'All properties can be accessed through "." operation.', 'Variables declared inside constructor functions are locally scoped and cannot be directly accessed as properties.', 500);

let gitCategory = new Category('git');
gitCategory.addQuestion('How do you check the state of your local git repository since your last commit?', 'git status', 'git status', 'git check', 'git current', 100);
gitCategory.addQuestion('What’s the git command that downloads your repository from GitHub to your computer?', 'git clone', 'git commit', 'git push', 'git clone', 200);
gitCategory.addQuestion('What’s the opposite of git clone, instead of downloading your code from GitHub, uploads your changes and code back to GitHub?', 'git push', 'git add', 'git push', 'git upload', 300);
gitCategory.addQuestion('What command renames the current branch to <branch>?', 'git branch -m', 'git rename', 'git remote rm', 'git branch -m', 400);
gitCategory.addQuestion('Which one of the following is NOT part of the data structure of a Git repository?', 'Body element', 'Body element', 'Branch pointer', 'Commit object', 500);

let ghCategory = new Category('github');
ghCategory.addQuestion('An individual change to a file is called what?', 'Commit', 'Commit', 'Branch', 'Repository', 100);
ghCategory.addQuestion('GitHub is a code hosting platform used mainly for ____?', 'Version control', 'Social media', 'Version control', 'Streaming', 200);
ghCategory.addQuestion('When creating a new Repo what is the name of the default branch?', 'Main', 'Staging', 'Developer', 'Main', 300);
ghCategory.addQuestion('What is designed to host your personal website from a GitHub repo?', 'GitHub Pages', 'GitHub MarketPlace', 'GitHub Pages', 'GitHub Projects', 400);
ghCategory.addQuestion('How is forking a repository different from cloning a repository?', 'Forking is a copy of another repo that lives on your account only', 'They are interchangeable', 'The forked rep is your active repo', 'Forking is a copy of another repo that lives on your account only', 500);

function getName(){
  let arr = [];
  let stringifiedObjectProfiles = localStorage.getItem('profile-name');
  let parsedObjectProfiles = JSON.parse(stringifiedObjectProfiles);
  arr.push(parsedObjectProfiles);

  for(let i = 0; i < arr.length;i++){
    for(let j = 0;j < arr[i].length;j++ ){
      document.getElementById('Welcome').textContent =`${arr[i][j].name}, lets play!`;
    }
  }
}
getName();

function submitAnswer(event) { //eslint-disable-line
  event.preventDefault();
  let playerAnswer = event.target.options.value;
  let category = document.getElementById('category').value;
  let answeredCorrectly = false;
  eventCounter++;

  for(let i = 0; i < gameCategories.length; i++){
    if (category === gameCategories[i].catName) {
      for (let j = 0; j < gameCategories[i].catQuestions.length; j++) {
        if (playerAnswer === gameCategories[i].catQuestions[j].answer) {
          answeredCorrectly = true; // eslint-disable-line
          playerScore += gameCategories[i].catQuestions[j].points;
          document.getElementById('game-score').textContent =`${playerScore}, is your score!`;
          localStorage.setItem('score', JSON.stringify(playerScore));
          modalBg.classList.remove('bg-active');
        }
        else {
          modalBg.classList.remove('bg-active');
        }
      }
    }
  }
  takePlayerToLeaderBoard(eventCounter,playerScore);
}

function takePlayerToLeaderBoard(counter,currentScore){
  if(counter === 5 || topScore === currentScore){
    window.location.href = "leaderboard.html";
  }
}


function renderModal(obj, question) {
  document.getElementById('category').setAttribute('value', obj.catName);
  document.getElementById('question').setAttribute('value', question.question);

  document.getElementById('inputA').setAttribute('value', question.a);
  document.getElementById('inputB').setAttribute('value', question.b);
  document.getElementById('inputC').setAttribute('value', question.c);

  document.getElementById('a').setAttribute('for', question.a);
  document.getElementById('b').setAttribute('for', question.b);
  document.getElementById('c').setAttribute('for', question.c);

  document.getElementById('questionText').textContent = question.question;
  document.getElementById('a').textContent = question.a;
  document.getElementById('b').textContent = question.b;
  document.getElementById('c').textContent = question.c;
}


function questionClick(event) { //eslint-disable-line

  let category = event.target.classList[0];
  let question = +event.target.classList[1];

  for (let i = 0; i < gameCategories.length; i++) {
    if (category === gameCategories[i].catName) {
      for (let j = 0; j < gameCategories[i].catQuestions.length; j++) {
        if (question === gameCategories[i].catQuestions[j].points) {
          renderModal(gameCategories[i], gameCategories[i].catQuestions[j]);
          event.target.classList.remove('unclicked');
          event.target.classList.add('clicked');
        }
      }
    }
  }
  modalBg.classList.add('bg-active');
}

tileSelect.addEventListener('click', questionClick);
gameForm.addEventListener('submit', submitAnswer);
