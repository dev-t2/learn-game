import { memo, useCallback, useEffect, useState } from 'react';

import { initialKeyboard, keyboard, KeyboardEvent } from './api/keyboard';

const App = () => {
  const [keys, setKeys] = useState(initialKeyboard);

  const onKeyboard = useCallback((keyboardEvent: KeyboardEvent) => {
    setKeys((prev) => ({ ...prev, ...keyboardEvent }));
  }, []);

  console.log(keys);

  useEffect(() => {
    keyboard(onKeyboard);
  }, [onKeyboard]);

  return <div>React App</div>;
};

export default memo(App);
