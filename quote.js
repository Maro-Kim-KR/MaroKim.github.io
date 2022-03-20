'use strict';

const quoteList = [
  {
    author : '- Eli cohen',
    quote : "Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been"
  },
  {
    author : '- Simon Sinek',
    quote : 'Working hard for something we don\'t care about is called stressed, working hard for something we love is called passion.'
  },
  {
    quote : 'Move out of your comfort zone. You can only grow if you are willing to feel awkward and uncomfortable when you try something new.',
    author : '- Brian Tracy'
  },
  {
    quote : 'Don\'t let the fear of losing be greater than the excitement of winning.',
    author : '- Robert Kiyosaki'
  },
  {
    quote : 'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.',
    author : '- Dale Carnegie'
  },
  {
    quote : 'Action is the foundational key to all success.',
    author : '- Pablo Picasso'
  }];

  const quoteHolder = document.querySelector('.quote :first-child');
  const authorHolder = document.querySelector('.quote :last-child');
  let randomNum = Math.floor(Math.random()*quoteList.length);

  quoteHolder.innerText = quoteList[randomNum].quote;
  authorHolder.innerText = quoteList[randomNum].author;
