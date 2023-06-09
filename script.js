const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "red",
  "blue",
  "blue",
  "green",
  "green",
  "orange",
  "orange",
  "purple",
  "purple",
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let firstCard = "";
let secondCard = "";
let count = 0;
let cardsHidden = COLORS.length;
// TODO: Implement this function!
function handleCardClick(event) {
  if (event.target.classList.contains("revealed")) return;
  count++;
  if (count == 1) {
    event.target.style.backgroundColor = event.target.className;
    firstCard = event.target;
    event.target.classList.add("revealed");
  } else if (count == 2) {
    event.target.style.backgroundColor = event.target.className;
    secondCard = event.target;
    event.target.classList.add("revealed");

    if (firstCard.style.backgroundColor !== secondCard.style.backgroundColor) {
      setTimeout(function () {
        firstCard.classList.remove("revealed");
        firstCard.style.backgroundColor = "";
        secondCard.classList.remove("revealed");
        secondCard.style.backgroundColor = "";
        count = 0;
      }, 1000);
    } else cardsHidden -= 2;
    setTimeout(function () {
      count = 0;
    }, 1000);
  } else if (count == 3) {
    return;
  }

  if (cardsHidden === 0) {
    event.target.style.backgroundColor = event.target.className;
    let draw = Math.floor(Math.random() * 6);
    if (draw === 1) {
      alert("You're looking great today!!");
    }
    if (draw === 2) {
      alert("You are getting really good at this game!!");
    }
    if (draw === 3) {
      alert("Birds aren't real!");
    }
    if (draw === 4) {
      alert("I'm so proud of you :)");
    }
    if (draw === 5) {
      alert("Go ahead...Play again. I won't tell");
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
