const keyDown = {};

window.addEventListener('keydown', (event) => {
  keyDown[event.key] = true;
});

window.addEventListener('keyup', (event) => {
  keyDown[event.key] = false;
});
