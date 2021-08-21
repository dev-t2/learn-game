const isKeyDown = {};

window.addEventListener('keydown', (event) => {
  isKeyDown[event.key] = true;

  console.log(isKeyDown);
});

window.addEventListener('keyup', (event) => {
  isKeyDown[event.key] = false;

  console.log(isKeyDown);
});
