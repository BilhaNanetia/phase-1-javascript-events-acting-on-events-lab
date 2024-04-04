 const dodger = document.getElementById("dodger");

 function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  
  const dodger2 = document.getElementById("dodger");
 const gameFieldWidth = 400;  // Width of the game field
 const dodgerWidth = 40;       // Width of the dodger

 function moveDodgerRight() {
  const leftValue = dodger.style.left.replace("px", "") || 0;
  const left = parseInt(leftValue, 10);

  const newLeft = Math.min(left + 10, gameFieldWidth - dodgerWidth);

  dodger.style.left = `${newLeft}px`;
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
   
  
