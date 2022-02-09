// genereate a random number, then add the fortune at that index to the 'fortune' element
const findFortune = () => {
  const idx = Math.floor(Math.random() * fortunesArray.length);
  const fortune = fortunesArray[idx];

  document.getElementById("fortune").innerHTML = fortune;
};

// event listener for 'reveal' button
let revealButton = document.getElementById("reveal-button");
revealButton.addEventListener("click", findFortune);
