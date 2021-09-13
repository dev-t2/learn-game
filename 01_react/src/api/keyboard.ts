type Callback = (key: {}) => void;

const keyboard = (callback: Callback) => {
  window.addEventListener('keydown', ({ key }) => {
    callback({ [key]: true });
  });

  window.addEventListener('keyup', ({ key }) => {
    callback({ [key]: false });
  });
};

export default keyboard;
