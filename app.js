'use strict';

var votesRemaining = 25;

var busMallContainerEl = document.getElementById('busmall-container');

var resultsEl = document.getElementById('results');

var busMallOneEl = document.getElementById('busmall-1');
var busMallTwoEl = document.getElementById('busmall-2');
var busMallThreeEl = document.getElementById('busmall-3');

var topBusMallImgEl = document.getElementById('top-busmall')
var allBusMall = [];

function busMall(name){
  this.name = name;
  this.filepath = `img/${name}`;
  this.votes = 0;
  this.views = 0;

  allBusMall.push(this);
}

new busMall('bag.jpg');
new busMall('banana.jpg');
new busMall('bathroom.jpg');
new busMall('boots.jpg');
new busMall('breakfast.jpg');
new busMall('bubblegum.jpg');
new busMall('chair.jpg');
new busMall('cthulhu.jpg');
new busMall('dog-duck.jpg');
new busMall('dragon.jpg');
new busMall('pen.jpg');
new busMall('pet-sweep.jpg');
new busMall('scissors.jpg');
new busMall('shark.jpg');
new busMall('sweep.png');
new busMall('tauntaun.jpg');
new busMall('unicorn.jpg');
new busMall('usb.gif');
new busMall('water-can.jpg');
new busMall('wine-glass.jpg');




var recentRandomNumbers = [];

function random(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

function render(){

  var randomIndex = random(0, allBusMall.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBusMall.length-1);
  }

  recentRandomNumbers.push(randomIndex);

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallOneEl.src = allBusMall[randomIndex].filepath;
  busMallOneEl.alt = allBusMall[randomIndex].name;
  busMallOneEl.title = allBusMall[randomIndex].name;


  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBusMall.length-1);
  }

  recentRandomNumbers.push(randomIndex);

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallTwoEl.src = allBusMall[randomIndex].filepath;
  busMallTwoEl.alt = allBusMall[randomIndex].name;
  busMallTwolEl.title = allBusMall[randomIndex].name;
  
   randomIndex = random(0, allBusMall.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBusMall.length-1);
  }

  recentRandomNumbers.push(randomIndex);

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallThreeEl.src = allBusMall[randomIndex].filepath;
  busMallThreeEl.alt = allBusMall[randomIndex].name;
  busMallThreeEl.title = allBusMall[randomIndex].name;
}



function renderBestBusMall(){
  var bestBusMall;
  var temp = 0;
  var topImg;

  for(var i = 0; i < allBusMall.length; i++){
    if(allBusMall[i].votes > temp){
      temp = allBusMall[i].votes;
      bestBusMall = allBusMall[i].name;
      topImg = allBusMall[i].filepath;
    }
  }


  var h2El = document.createElement('h2');
  h2El.textContent = `The Best BusMall is ${bestBusMall} with ${temp} votes.`;
  resultsEl.appendChild(h2El);

  topImgEl.filepath= topImg;
}

busMallContainerEl.addEventListener('click', handleClick);

function handleClick(e){
  var busMallName = e.target.title;

  if(e.target.id === 'busmall-container'){
    alert('click a busmall!');
  }

  if(votesRemaining === 0){
    busMallContainerEl.removeEventListener('click', handleClick);
    renderBestBusMall();
  }

  for(var i = 0; i < allBusMall.length; i++){
    if(busMallName === allBusMall[i].name){
      allBusMall[i].votes++;
      votesRemaining--;
    }
  }
  render();
}


render();