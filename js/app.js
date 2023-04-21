alert("Welcome in")

// TODO: Ask the user's name.

// TODO: Ask 5 y/n questions.
let answerOne = prompt("Do I have a dog?")
let answerTwo = prompt("Do I like cats?")
let answerThree = prompt("Do I have children?")
let answerFour = prompt("Do I like the color black?")
let answerFive = prompt("Do I like sports?")

if(answerOne === 'n' || answerOne ==='no' ){
    console.log("You are correct!");
    alert("You are correct!");
} else {
    // if 'y' then you are incorrect
    console.log("You are incorrect!");
}

if(answerTwo === 'n' || answerTwo === 'no' ){
    console.log("You are correct!");
    alert("You are correct!")
}else {
    // if 'y' then you are incorrect
    console.log("You are incorrect!")
}

if(answerThree === 'y' || answerThree ==='yes' ){
    console.log("You are correct!");
    alert("You are correct!")
} else {
    // if 'n' then you are incorrect
    console.log("You are incorrect!");
} 
if(answerFour === 'y' || answerFour ==='yes' ){
    console.log("You are correct!");
    alert("You are correct!")
} else {
    // if 'n' then you are incorrect
    console.log("You are incorrect!");
} 
if(answerFive === 'y' || answerFive==='yes' ){
    console.log("You are correct!");
    alert("You are correct!")
} else {
    // if 'n' then you are incorrect
    console.log("You are incorrect!");
} 

alert(
    `Now that you've gotten to know me, ${name}! Let's play a random guessing game.`
  );
  
  // Question 6
  let answer6 = [2, 4, 5, 8];
  let attempts6 = 6;
  let userAnswer6 = parseInt(prompt("Guess a number between 1 and 10:"));
  
  while (attempts6 > 0) {
    console.log("User's guess: " + answer6);
    let isCorrect = false;
    for (let i = 0; i < answer6.length; i++) {
      if (userAnswer6 === answer6[i]) {
      alert("Correct! The possible answers were: " + answer6[0] + ", " + answer6[1] + ", " + answer6[2] + ", " + answer6[3]);
      correctAnswers++;
      isCorrect = true;
      break;
      }
    }
    if (isCorrect) {
      break;
    } else {
      attempts6--;
      if (userAnswer6 > 10) {
        alert("Too high!");
      } else if (userAnswer6 < 2) {
        alert("Too low!");
      } else if (userAnswer6 % 2 !== 0) {
        alert("That's not divisible by 2!");
      } else {
        alert("Nope, that aint it.");
      }
      if (attempts6 > 0) {
        userAnswer6 = parseInt(prompt("Try it again!"));
      }
    }
  }
  
  if (attempts6 === 0) {
    console.log("User is out of attempts.");
    alert("Sorry, you ran out of attempts. The possible answers were: " + answer6[0] + ", " + answer6[1] + ", " + answer6[2] + ", " + answer6[3]);
  } else {
      console.log("You got it right.");
  }
  
  // Question 7
  let answer7;
  let correctAns ="black"|| "pink" || "brown";
  let count = 0 
  let question = "Choose one of my favorite colors.";
  let a = true;
  
  while (answerCount > 0) {
    answer7 = prompt("Name my favorite color:");
    for (var i = 0; i < possibleAnswers.length; i++) {
      if (answer7.toLowerCase() === possibleAnswers[i].toLowerCase()) {
        alert("Correct!");
        correctAnswers++;
        answered = true;
        break;
      }
    }
    if (answered) {
      break;
    }
    alert("Incorrect. Guesses left: " + (answerCount - 1));
    answerCount--;
  }
  if (answerCount == 0) {
    alert("Game Over. Possible answers were: " + possibleAnswers.join(", "));
  }
  
  {
    console.log("Question 7 - Name my favorite color:");
    console.log("Possible correct answers: " + possibleAnswers.join(", "));
    console.log("User's answer: " + answer7);
    console.log("User got it correct? " + answer7);
  }
  
  // Display total correct answers
  alert("You got " + correctAnswers + " out of 7 correct.");