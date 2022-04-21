document.addEventListener('DOMContentLoaded', () => {

  const dino = document.querySelector('.dino');
  const background = document.querySelector('.background');
  const alert = document.getElementById('alert');
  let isJumping = false;
  let isGameOver = false;
  let gravity = 0.9;

  function control(event) {
    // If space bar is pressed jump function is called
    if (event.keyCode === 32) {
      if (!isJumping) {
        isJumping = true;
        jump();
      }
    }
  }

  // If any key is pressed control function is called
  document.addEventListener('keydown', control);

  let dinoPosition = 0;

  function jump() {
    let count = 0;

    let upTimerId = setInterval(function () {

      if (count === 15) {
        // Stop going up
        clearInterval(upTimerId);

        let downTimerId = setInterval(function () {
          if (count === 0) {
            // Stop going up
            clearInterval(downTimerId);
            isJumping = false;
          }
          // Move down
          dinoPosition -= 5;
          count--;
          dinoPosition = dinoPosition * gravity;
          dino.style.bottom = dinoPosition + 'px';
          console.log(dino.style.bottom);
        }, 15);
      }

      // Move up
      dinoPosition += 30;
      count++;
      dinoPosition = dinoPosition * gravity;
      dino.style.bottom = dinoPosition + 'px';
      console.log(dino.style.bottom);
    }, 15);

  }

  function generateObstacles() {

    let randomTime = Math.random() * 4000;

    let obstaclePosition = 1000;
    const obstacle = document.createElement('div');
    if(!isGameOver) obstacle.classList.add('obstacle');
    background.appendChild(obstacle);
    obstacle.style.left = obstaclePosition + 'px';

    let timerId = setInterval(function () {
      if (obstaclePosition > 0 && obstaclePosition < 60 && dinoPosition < 60) {
        clearInterval(timerId);
        alert.innerHTML = 'Game Over';
        isGameOver = true;
        // Remove all children
        while (background.firstChild) {
          background.removeChild(background.lastChild);
        }
      }

      obstaclePosition -= 10;
      obstacle.style.left = obstaclePosition + 'px';

    }, 20);

    if(!isGameOver) setTimeout(generateObstacles, randomTime);

  }

  generateObstacles();


});