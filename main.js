let attempts = 0;
let score = 0;
function guess(userGuess) {
  //increasing attemps by 1
  attempts++
  document.getElementById("attempts").innerHTML = attempts;
  //generating a random number
  const random_number = Math.floor(Math.random() * 100) + 1;
  // determining the correct answer
  const correctAnswer = random_number % 2 == 0 ? "even" : "odd";
    //sfx functian
  function sfx(isCorrect) {
    let audio = (isCorrect)
      ? document.getElementById("correct")
      : document.getElementById("wrong");

    audio.pause();
    audio.curenttime = 0;
    audio.play();
  }
  if (correctAnswer == userGuess) {
    //update the display
    document.getElementById("display").innerHTML =
      "correct! the number is " + random_number;
      //increasing the player score
      score++
      document.getElementById("Score").innerHTML = score;
      //playing the sfx
      sfx(true);
  }
else{
  //update the display
  document.getElementById("display").innerHTML =
  "wrong! the number is " + random_number;
      //playing the sfx
      sfx(false);

}
}

