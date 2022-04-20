document.addEventListener('DOMContentLoaded', () => {

  const dino = document.querySelector('.dino');
  let isJumping = false;
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

  let position = 0;

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
          position -= 5;
          count--;
          position = position * gravity;
          dino.style.bottom = position + 'px';
          console.log(dino.style.bottom);
        }, 15);
      }

      // Move up
      position += 30;
      count++;
      position = position * gravity;
      dino.style.bottom = position + 'px';
      console.log(dino.style.bottom);
    }, 15);

  }

  function generateObstacles() {

  }





  // If any key is pressed control function is called
  document.addEventListener('keydown', control);

});