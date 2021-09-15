export type KeyboardEvent = { [key: string]: boolean };

type Callback = (keyboardEvent: KeyboardEvent) => void;

export const initialKeyboard = { ArrowLeft: false, ArrowRight: false };

export const keyboard = (callback: Callback) => {
  window.addEventListener('keydown', ({ key }) => {
    if (Object.keys(initialKeyboard).includes(key)) {
      callback({ [key]: true });
    }
  });

  window.addEventListener('keyup', ({ key }) => {
    if (Object.keys(initialKeyboard).includes(key)) {
      callback({ [key]: false });
    }
  });
};