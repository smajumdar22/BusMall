'use strict';

// render two images to the DOM
var votesRemaining = 25;

var busMallContainerEl = document.getElementById('busmall-container');

var resultsEl = document.getElementById('results');

var busMallOneEl = document.getElementById('busmall-1');
var busMallTwoEl = document.getElementById('busmall-2');
var busMallThreeEl = document.getElementById('busmall-3');


var allBusMall = [];

function busMall(name){
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;

  allBusMall.push(this);
}

new busMall('bag');
new busMall('banana');
new busMall('bathroom');
new busMall('boots');
new busMall('breakfast');
new busMall('bubblegum');
new busMall('chair');
new busMall('cthulhu');
new busMall('dog-duck');
new busMall('dragon');
new busMall('pen');
new busMall('pet-sweep');
new busMall('scissors');
new busMall('shark');
new busMall('sweep');
new busMall('tauntaun');
new busMall('unicorn');
new busMall('usb');
new busMall('water-can');
new busMall('wine-glass');



var recentRandomNumbers = [];

function render(){

  var randomIndex = random(0, allBusMall.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBusMall.length-1);
  }

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  recentRandomNumbers.push(randomIndex);

  allBusMall[randomIndex].views++;

  busMallOneEl.src = allBusMall[randomIndex].filepath;
  busMallOneEl.alt = allBusMall[randomIndex].name;
  busMallOneEl.title = allBusMall[randomIndex].name;

  var randomIndex = random(0, allBusMall.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBusMall.length-1);
  }

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallTwoEl.src = allBusMall[randomIndex].filepath;
  busMallTwoEl.alt = allBusMall[randomIndex].name;
  busMallTwolEl.title = allBusMall[randomIndex].name;
  
  var randomIndex = random(0, allBusMall.length-1);

  while(recentRandomNumbers.includes(randomIndex)){
    randomIndex = random(0, allBusMall.length-1);
  }

  if(recentRandomNumbers.length > 3){
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallThreeEl.src = allBusMall[randomIndex].filepath;
  busMallThreeEl.alt = allBusMall[randomIndex].name;
  busMallThreeEl.title = allBusMall[randomIndex].name;
}



function random(min, max){
  return Math.floor(Math.random() * (max - min +1) + min);
}

function renderBestBusMall(){
  // create an element
  // add content
  // append to the parent

  var bestBusMall;
  var temp = 0;

  for(var i = 0; i < allBusMall.length; i++){
    if(allBusMall[i].votes > temp){
      temp = allBusMall[i].votes;
      bestBusMall = allBusMall[i];
    }
  }


  var h2El = document.createElement('h2');
  h2El.textContent = `The Best BusMall is ${bestBusMall.name} with ${bestBusMall.votes} votes.`;
  resultsEl.appendChild(h2El);
}

busMallContainerEl.addEventListener('click', handleClick);

function handleClick(e){
  var busMallName = e.target.title;

  if(e.target.id === 'busmall-container'){
    alert('click a busmall!');
  }

  if(votesRemaining === 0){
    busMallContainerEl.removeEventListener('click', handleClick);
    // render the results to the DOM
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
