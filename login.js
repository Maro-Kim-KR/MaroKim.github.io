'use strict';

const loginForm = document.querySelector('.loginform');
const userinput = document.querySelector('#usernameinput');
const welcome = document.querySelector('.welcome');
const mainpage = document.querySelector('.wrapper');

function greeting() {
  const username = localStorage.getItem('user')
  if(username===null) {
    loginForm.classList.remove('hidden');
    welcome.classList.add('hidden');
    mainpage.classList.add('hidden');
  } else {
    loginForm.classList.add('hidden');
    welcome.classList.remove('hidden');
    mainpage.classList.remove('hidden');
    welcome.innerText = `Welcome, ${username}!`;
  }
};

function login(event) {
  event.preventDefault();
  const username = userinput.value;
  localStorage.setItem('user', username);
  greeting();
};


greeting();
loginForm.addEventListener('submit', login);
