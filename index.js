import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const year2014 = fifaData.filter(year => year.Year === 2014)
console.log(year2014);

const final2014 = year2014.filter(game => game.Stage === "Final")
console.log(final2014)

const finalHome2014 = final2014.map(team => team["Home Team Name"])
console.log(finalHome2014)

const finalAway2014 = final2014.map(team => team["Away Team Name"])
console.log(finalAway2014)

const homeFinalGoals = final2014.map(goals => goals["Home Team Goals"])
console.log(homeFinalGoals)

const awayFinalGoals = final2014.map(goals => goals["Away Team Goals"])
console.log(awayFinalGoals)

const finalWinner = final2014.map(winner => winner["Win conditions"])

console.log (finalWinner)
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
function getFinals(data) {

  const finals = data.filter(game => game.Stage === "Final");

  return finals;
 
  // })
  // return finals;
    /* code here */

};

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

  const finalYears = callback.map(year => year.Year)
    /* code here */
  return finalYears;
};

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

  let winners = [];

  callback.forEach(function(goal){
    if (goal["Home Team Goals"] > goal["Away Team Goals"]){
      winners.push(goal["Home Team Name"])
    }
    else {
      winners.push(goal["Away Team Name"])
    }
   
  })
    /* code here */
  return winners
}

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2) {

  let yearArr = [];

  const years = callback2.forEach((year, i) =>{
    yearArr.push(year);
  });
 console.log (yearArr);

console.log (years);


 let winnerArr = [];

  const winners = callback1.forEach((year, i) =>{
    winnerArr.push(year);
  });
 console.log (winnerArr);

console.log(yearArr);

let champArray = yearArr.map((champYear, i) => `In ${champYear} , ${winnerArr[i]} won the World Cup!`);

console.log(champArray);

return (champArray);
  // return `In ${yearArr}, ${callback1} won the World Cup!`

};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
  
  let homeTeamTotal = data.reduce((acc, goals) => {
    return acc += goals["Home Team Goals"]
  }, 0);
  
  let homeTeamAverage = (homeTeamTotal/data.length);

  let awayTeamTotal = data.reduce((acc, goals) => {
    return acc += goals["Away Team Goals"]
  }, 0);
  
  let awayTeamAverage = (awayTeamTotal/data.length);

  return `The Home team average goals scored is ${homeTeamAverage} and the Away team average goals scored is ${awayTeamAverage}`

    /* code here */

};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */