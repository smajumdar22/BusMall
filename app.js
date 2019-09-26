'use strict';

var votesRemaining = 25;

var canvasEl = document.getElementById('my-canvas');

var busMallContainerEl = document.getElementById('busmall-container');

var resultsEl = document.getElementById('results');

var busMallOneEl = document.getElementById('busmall-1');
var busMallTwoEl = document.getElementById('busmall-2');
var busMallThreeEl = document.getElementById('busmall-3');

var topBusMallImgEl = document.getElementById('top-busmall');
var allBusMall = [];

function BusMall(name) {
  this.name = name;
  this.filepath = `img/${name}`;
  this.votes = 0;
  this.views = 0;

  allBusMall.push(this);
}

new BusMall('bag.jpg');
new BusMall('banana.jpg');
new BusMall('bathroom.jpg');
new BusMall('boots.jpg');
new BusMall('breakfast.jpg');
new BusMall('bubblegum.jpg');
new BusMall('chair.jpg');
new BusMall('cthulhu.jpg');
new BusMall('dog-duck.jpg');
new BusMall('dragon.jpg');
new BusMall('pen.jpg');
new BusMall('pet-sweep.jpg');
new BusMall('scissors.jpg');
new BusMall('shark.jpg');
new BusMall('sweep.png');
new BusMall('tauntaun.jpg');
new BusMall('unicorn.jpg');
new BusMall('usb.gif');
new BusMall('water-can.jpg');
new BusMall('wine-glass.jpg');


var recentRandomNumbers = [];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function render() {

  var randomIndex = random(0, allBusMall.length - 1);

  while (recentRandomNumbers.includes(randomIndex)) {
    randomIndex = random(0, allBusMall.length - 1);
  }

  recentRandomNumbers.push(randomIndex);

  if (recentRandomNumbers.length > 6) {
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallOneEl.src = allBusMall[randomIndex].filepath;
  busMallOneEl.alt = allBusMall[randomIndex].name;
  busMallOneEl.title = allBusMall[randomIndex].name;


  while (recentRandomNumbers.includes(randomIndex)) {
    randomIndex = random(0, allBusMall.length - 1);
  }

  recentRandomNumbers.push(randomIndex);

  if (recentRandomNumbers.length > 6) {
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallTwoEl.src = allBusMall[randomIndex].filepath;
  busMallTwoEl.alt = allBusMall[randomIndex].name;
  busMallTwoEl.title = allBusMall[randomIndex].name;

  randomIndex = random(0, allBusMall.length - 1);

  while (recentRandomNumbers.includes(randomIndex)) {
    randomIndex = random(0, allBusMall.length - 1);
  }

  recentRandomNumbers.push(randomIndex);

  if (recentRandomNumbers.length > 6) {
    recentRandomNumbers.shift();
  }

  allBusMall[randomIndex].views++;

  busMallThreeEl.src = allBusMall[randomIndex].filepath;
  busMallThreeEl.alt = allBusMall[randomIndex].name;
  busMallThreeEl.title = allBusMall[randomIndex].name;
}

function renderBestBusMall() {
  var bestBusMall;
  var temp = 0;
  var topImg;

  for (var i = 0; i < allBusMall.length; i++) {
    if (allBusMall[i].votes > temp) {
      temp = allBusMall[i].votes;
      bestBusMall = allBusMall[i].name;
      topImg = allBusMall[i].filepath;
    }
  }


  var h2El = document.createElement('h2');
  h2El.textContent = `The Best BusMall is ${bestBusMall} ${topImg} with ${temp} votes.`;
  resultsEl.appendChild(h2El);

  topBusMallImgEl.src = allBusMall.filepath;
  topBusMallImgEl.alt = allBusMall.name;
  topBusMallImgEl.title = allBusMall.name;

  //var topImgEl.filepath= topImg;

  renderChart();

}


busMallContainerEl.addEventListener('click', handleClick);

function handleClick(e) {
  var busMallName = e.target.title;

  if (e.target.id === 'busmall-container') {
    alert('click a busmall!');
  }

  if (votesRemaining === 0) {
    busMallContainerEl.removeEventListener('click', handleClick);
    renderBestBusMall();
  }

  for (var i = 0; i < allBusMall.length; i++) {
    if (busMallName === allBusMall[i].name) {
      allBusMall[i].votes++;
      votesRemaining--;
    }
  }
  render();

}
render();

var ctx = canvasEl.getContext('2d');

var namesArray = [];
var votesArray = [];

function renderChart() {

  if (votesRemaining === 0) {

    for (var i = 0; i < allBusMall.length; i++) {
      if (allBusMall[i].votes > 0) {

        namesArray.push(allBusMall[i].name);
        votesArray.push(allBusMall[i].votes);
      }
    }


  }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: namesArray, // names of each object

      datasets: [{
        label: '# of Votes',
        data: votesArray, // number of votes for each object
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  locStorBusMall();
}

function locStorBusMall() {

  //Stringify BusMall
  var stringifyedBusMall = JSON.stringify(allBusMall);
  console.log('My stringifyed BusMall is' + stringifyedBusMall);
  //Store it in local storage
  localStorage.setItem('BusMall', stringifyedBusMall);
  console.log('SetItem storage' + localStorage);
}

var localStorageBusMall = localStorage.getItem('BusMall');
console.log('GetItem storage' + localStorageBusMall);

var parsedBusMall = JSON.parse(localStorageBusMall);
console.log('Parsed BusMall' + parsedBusMall);

if (localStorageBusMall) {
  allBusMall = parsedBusMall;
} else {
  allBusMall = [];

}
console.log('All bus Mall' + parsedBusMall);


