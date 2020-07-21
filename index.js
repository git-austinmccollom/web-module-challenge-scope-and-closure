// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    counter1 returns/creates a new counter function
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *    counter2 uses a closure because it references count, which was declared globally outside of the function
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    The scenario in which counter1 code would be preferable is when you need to create multiple counters 
 *    to count different things. counter2 would be preferable if your program is only counting one thing.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    let points = Math.floor(Math.random() * 3);
    return points;

}

// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numInnings, callback){
  let home = 0
  for ( let i = 0; i < numInnings; i++ ) {
    home += callback();
    console.log(`home score in inning ${i} was ${home}`);
  }
  let away = 0
  for ( let i = 0; i < numInnings; i++ ) {
    away += callback();
    console.log(`away score in inning ${i} was ${away}`);
  }
  return score = {
    "Home": home,
    "Away": away,
  }

}

// console.log( finalScore( 9, inning ) );

// function finalScore(numInnings, maxPoints, callback){
//   let home = 0
//   for ( let i = 0; i < numInnings; i++ ) {
//     home += callback(maxPoints);
//     console.log(`home score in inning ${i} was ${home}`);
//   }
//   let away = 0
//   for ( let i = 0; i < numInnings; i++ ) {
//     away += callback(maxPoints);
//     console.log(`away score in inning ${i} was ${away}`);
//   }
//   return {
//     "Home": home,
//     "Away": away,
//   }

// }

// console.log( finalScore( 9, 3, inning ) );

// function finalScore(numInnings, callback){
//   let home = 0
//   for ( let i = 0; i < numInnings; i++ ) {
//     home += Math.floor(Math.random() * 3);
//     console.log(`home score in inning ${i} was ${home}`);
//   }
//   let away = 0
//   for ( let i = 0; i < numInnings; i++ ) {
//     away += Math.floor(Math.random() * 3);
//     console.log(`away score in inning ${i} was ${away}`);
//   }
//   return {
//     "Home": home,
//     "Away": away,
//   }

// }

// console.log( finalScore( 9, inning() ) );

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each point in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore(callback) {
  let home = callback();
  let away = callback();
  return score = {
    "Home": home,
    "Away": away,
  }
}

function scoreboard(getScore, getInning, numInnings) {
  let inningScore;
  let gameScore = {
    "Home": 0,
    "Away": 0,
  }
  let numAdjective;
  for ( let i = 0; i < numInnings; i++ ) {
    inningScore = getScore(getInning)
    gameScore.Home += inningScore.Home;
    gameScore.Away += inningScore.Away;
    
    if ( i === 0 ) {
      numAdjective = '1st';
    } else if ( i === 1 ) {
      numAdjective = '2nd';
    } else if ( i === 2 ) {
      numAdjective = '3rd';
    } else if ( i === 3 ) {
      numAdjective = '4th';
    } else if ( i === 4 ) {
      numAdjective = '5th';
    } else if ( i === 5 ) {
      numAdjective = '6th';
    } else if ( i === 6 ) {
      numAdjective = '7th';
    } else if ( i === 7 ) {
      numAdjective = '8th';
    } else {
      numAdjective = '9th';
    }
    console.log(`${numAdjective} inning: ${gameScore.Away} - ${gameScore.Home}`);
  }
  return `Final Score: ${gameScore.Away} - ${gameScore.Home}`;
}
console.log(scoreboard(getInningScore, inning, 9));