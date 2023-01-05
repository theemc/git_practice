/*Hey there, user! Modify the following 2 variables on lines 2 and 3 to customize your experience! */
let userName = 'Chris';
let userQuestion='Will I finish JS Syntax Today?';


/*Please, don't touch below. Por favore, no toque abajo. */ 
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
if (userName){
  console.log(`${userName} asks the magic eight ball: ${userQuestion}`);
} else {
  console.log(`A mysterious user asks the magic eight ball: ${userQuestion}`)
}

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

/*Switch Method */
  switch(randomNumber) {
    case 0:
      eightBall = 'It is certain';
      break;
    case 1:
      eightBall = 'It is decidedly so';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Do not count on it';
      break;
    case 5:
      eightBall = 'My sources say no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
    default:
      console.log('Shit. Something is broken and you shouldn\'t be seeing this. My bad.');
  } 

/*If... else if Method 
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
    eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
    eightBall = 'Reply hazy. Try again';
} else if (randomNumber === 3) {
    eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
    eightBall = 'Don\'t count on it';
} else if (randomNumber === 5) {
    eightBall = 'My sources say no';
} else if (randomNumber === 6) {
    eightBall = 'Outlook not so good'
} else if (randomNumber === 7) {
    eightBall = 'Signs point to yes';
}
*/
/*Log the result to console*/
console.log(`The Magic Eight Ball says: ${eightBall}.`)






/*This just lets me see the process in my head. It was challenging for me to understand how multiplying a number that is less than 1 by 8 would produce an even distrubtion of numbers from 0 to 8. It makes a little more sense to me now, though.*/

/*
let testNumber = Math.random();
console.log(testNumber);
testNumber = testNumber * 4;
console.log(testNumber);
testNumber = Math.floor(testNumber);
console.log(testNumber) 
*/