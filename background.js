'use strict';

const images = ['1.jpeg',
'2.jpeg',
'3.jpeg',
'4.jpeg',
'5.jpeg',
'6.jpeg',
'7.jpeg',
'8.jpeg',
'9.jpeg',
'10.jpeg'
];

const body = document.querySelector("body");

function pickImage () {
  const randomNum1 = Math.floor(Math.random()*images.length+1);
  
  console.log(randomNum1);


  const randomImage = images[randomNum1];

  body.style.backgroundImage = `url(images/${randomImage})`;
}

pickImage();

