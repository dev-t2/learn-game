export type Keyboard = {
  Space: boolean;
  ArrowLeft: boolean;
  ArrowRight: boolean;
};

export const initialKeyboard: Keyboard = {
  Space: false,
  ArrowLeft: false,
  ArrowRight: false,
};

export type KeyboardEvent = { [key: string]: boolean };

type Callback = (keyboardEvent: KeyboardEvent) => void;

export const keyboardEventListener = (callback: Callback) => {
  window.addEventListener('keydown', ({ code }) => {
    if (Object.keys(initialKeyboard).includes(code)) {
      callback({ [code]: true });
    }
  });

  window.addEventListener('keyup', ({ code }) => {
    if (Object.keys(initialKeyboard).includes(code)) {
      callback({ [code]: false });
    }
  });
};
